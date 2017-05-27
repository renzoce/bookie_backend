var Booking = require('./booking')

module.exports = {
  getBookings: function() {
    return Booking.findAll();
  },

  getBooking: function() {
    return null;
  }
};
