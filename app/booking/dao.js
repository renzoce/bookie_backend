var db = require('../config/db-config')

module.exports = {

  findAll: function() {
    return db.Booking.findAll();
  },

  findById: function(bookingId) {
    return db.Booking.findById(bookingId);
  },

  save: function(booking) {
    return db.Booking.create(booking);
  },

  findBookingsBetweenDates: function(initialDate, endDate) {
    return db.Booking.findAll({
      where: {
        startDate: {
          $gte: initialDate.split('T')[0],
          $lte: endDate.split('T')[0]
        }
      }
    });
  }
}
