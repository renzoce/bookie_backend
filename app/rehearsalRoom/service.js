var RehearsalRoom = require('./rehearsalRoom')

module.exports = {
  getRehearsalRooms: function() {
    return RehearsalRoom.findAll();
  },

  getRehearsalRoom: function() {
    return null;
  },

  getMonthAvailabilty: function(selectedDate) {

    //TODO Chequear si son las 23:59 por ej, y UTC
    var date = new Date().toLocaleDateString('en-US');
    var nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + 1);
    nextDate = nextDate.toLocaleDateString('en-US');

    var availableDay = new AvailableDay(date);
    var availableHour = new AvailableHour();
    availableHour.hour = 13;
    availableHour.duration = 2;

    var availableHour2 = new AvailableHour();
    availableHour2.hour = 15;
    availableHour2.duration = 8;

    availableDay.availableHours.push(availableHour);
    availableDay.availableHours.push(availableHour2);

    var availableDay2 = new AvailableDay(nextDate);
    var availableHour3 = new AvailableHour();
    availableHour3.hour = 22;
    availableHour3.duration = 2;

    var availableHour4 = new AvailableHour();
    availableHour4.hour = 23;
    availableHour4.duration = 1;

    availableDay2.availableHours.push(availableHour3);
    availableDay2.availableHours.push(availableHour4);

    var response = [];
    response.push(availableDay);
    response.push(availableDay2);
    return response;
  }
};


function AvailableDay(date) {
  this.day = date;
  this.availableHours = [];
}

function AvailableHour() {
  this.hour = 0;
  this.duration = 0;
}
