var RehearsalRoom = require('./rehearsalRoom')
var BookingDao = require('../booking/dao.js')
var RoomAvailability = require('../roomAvailability/service.js');

const PERIOD_LENGTH = 30;
const MIN_BOOKING_LENGTH = 60; //minutes

module.exports = {
  getRehearsalRooms: function() {
    return RehearsalRoom.findAll();
  },

  getRehearsalRoom: function() {
    return null;
  },

  getAvailabilityByRoom: function(roomId) {
    let response = [];
    let initialDate = new Date();
    let endDate = new Date();
    endDate.setDate(endDate.getDate() + PERIOD_LENGTH);

    return RoomAvailability.getAvailabilityByRoom(roomId)
      .then(roomAvailability => {

        return BookingDao.findBookingsBetweenDates(initialDate, endDate)
        .then(monthBookings => {

          for (let i = 0; i < PERIOD_LENGTH; i++) {

            let calendarDate = new Date();
            calendarDate.setDate(initialDate.getDate() + i);

            let schedule = roomAvailability.filter(function(obj) {
              return obj.dayNumber == calendarDate.getDay();
            })[0];

            if (schedule) {
              let bookings = getCurrentDayBookings(monthBookings, calendarDate);
              let availableSlots = getAvailableSlots(calendarDate, schedule, bookings);
              response = response.concat(availableSlots);
            }
          }
          return response;
        })
      })
  }
}

function getAvailableSlots(calendarDate, schedule, bookings) {
  let availableSlots = [];
  let index = 0;
  let initialTime = schedule.opening;
  let nextBooking = bookings[index];

  //TODO Chequear si es de madrugada
  while (schedule.closing - initialTime >= MIN_BOOKING_LENGTH && nextBooking) {

    if (nextBooking.startTime - initialTime >= MIN_BOOKING_LENGTH) {
      let newSlot = createNewSlot(calendarDate, initialTime, nextBooking.startTime - initialTime);
      availableSlots.push(newSlot);
    }

    initialTime = nextBooking.startTime + nextBooking.duration;
    nextBooking = bookings[index];
    index++;
  }

  let availableSlot = createNewSlot(calendarDate, initialTime, schedule.closing - initialTime);
  availableSlots.push(availableSlot);
  return availableSlots;
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

function createNewSlot(calendarDate, initialTime, duration) {
  let availableDay = new AvailableDay(calendarDate.toLocaleDateString('en-US'));
  let availableHour = new AvailableHour();
  availableHour.hour = initialTime / 60;
  availableHour.duration = duration / 60;

  //TODO chequear si es de madrugada
  /*if (schedule[0].opening > schedule[0].closing) {
    availableHour.duration = (1440 - schedule[0].opening + schedule[0].closing) / 60;
  } else {
    availableHour.duration = (schedule[0].opening - schedule[0].closing) / 60;
  }*/

  availableDay.availableHours.push(availableHour);
  return availableDay;
}

function AvailableDay(date) {
  this.day = date;
  this.availableHours = [];
}

function AvailableHour() {
  this.hour = 0;
  this.duration = 0;
}
