var db = require('../config/db-config')

module.exports = {
  getBookings: function() {
    return db.Booking.findAll();
  },

  getBooking: function() {
    return null;
  }
};
