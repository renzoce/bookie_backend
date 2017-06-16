var db = require('../config/db-config')

module.exports = {

  findBookingsBetweenDates: function(initialDate, endDate) {
    return db.Booking.findAll({
      where: {
        startDate: {
          $gte: initialDate,
          $lte: endDate          
        }
      }
    });
  }
}
