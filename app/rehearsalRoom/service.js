var RehearsalRoom = require('./rehearsalRoom')
var BookingDao = require('../booking/dao.js')
var RoomAvailability = require('../roomAvailability/service.js');
var db = require('../config/db-config')

const PERIOD_LENGTH = 30; //days
const MIN_BOOKING_LENGTH = 60; //minutes

module.exports = {
  
  getAvailabilityByRoom: function(roomId) {
    let response = [];
    let endDate = new Date();
    var initialDate = new Date();
    endDate.setDate(initialDate.getDate() + PERIOD_LENGTH);

    return RoomAvailability.getScheduleByRoom(roomId)
      .then(schedules => {

        return BookingDao
          .findBookingsBetweenDates(initialDate.toISOString(), endDate.toISOString())
          .then(monthBookings => {

            for (let i = 0; i < PERIOD_LENGTH; i++) {

              let calendarDate = new Date();
              calendarDate.setDate(initialDate.getDate() + i);
              let availableDay = new AvailableDay(calendarDate.toLocaleDateString('en-US'));

              let schedule = schedules.filter(function(obj) {
                return obj.dayNumber == calendarDate.getDay();
              })[0];

              if (schedule) {
                let bookings = getCurrentDayBookings(monthBookings, calendarDate);
                let currentDayAvailability = getDayAvailability(schedule, bookings, availableDay);
                response.push(currentDayAvailability);
              }
            }
            return response;
          })
      })
  }
}

function getCurrentDayBookings(monthBookings, calendarDate) {
  let bookings = monthBookings.filter(function(obj) {
    let bookingDate = obj.startDate;
    return bookingDate.getUTCFullYear() === calendarDate.getUTCFullYear() &&
      bookingDate.getUTCMonth() === calendarDate.getUTCMonth() &&
      bookingDate.getUTCDate() === calendarDate.getUTCDate();
  });
  return bookings;
}

function getDayAvailability(schedule, bookings, availableDay) {
  let index = 0;
  let currentTime = schedule.opening;
  let nextBooking = bookings[index];

  while (schedule.closing - currentTime >= MIN_BOOKING_LENGTH && nextBooking) {

    if (nextBooking.startTime - currentTime >= MIN_BOOKING_LENGTH) {

      let duration = (nextBooking.startTime - currentTime) / 60;
      let availableHour = new AvailableHour(currentTime / 60, duration);
      availableDay.availableHours.push(availableHour);

      //TODO chequear si es de madrugada
      /*if (schedule[0].opening > schedule[0].closing) {
        availableHour.duration = (1440 - schedule[0].opening + schedule[0].closing) / 60;
      } else {
        availableHour.duration = (schedule[0].opening - schedule[0].closing) / 60;
      }*/
    }
    currentTime = nextBooking.startTime + nextBooking.duration;
    nextBooking = bookings[index];
    index++;
  }

  let duration = (schedule.closing - currentTime) / 60;
  let availableHour = new AvailableHour(currentTime / 60, duration);
  availableDay.availableHours.push(availableHour);

  return availableDay;
}

function AvailableDay(date) {
  this.day = date;
  this.availableHours = [];
}

function AvailableHour(hour, duration) {
  this.hour = hour;
  this.duration = duration;
}
