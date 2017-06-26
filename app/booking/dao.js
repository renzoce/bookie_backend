var db = require('../config/db-config')

module.exports = {
  save: function(booking) {
    console.log(booking)
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
