var db = require('../config/db-config')

module.exports = {
  findAll: function() {
    return db.Client.findAll({
      //attributes: ['name'],
      include: [{
        model: db.User,
        attributes: ['name', 'email']
      }]
    })
  },

  findById: function(clientId) {
    return db.Client.findById(clientId, {
      include: [{
        model: db.User,
        attributes: ['name', 'email']
      }]
    })
  },

  getClientBookings: function(clientId) {
    return db.Booking.findAll({
      where: {
        userId: clientId
      }
    });
  },

  getClientComments: function(clientId) {
    return db.Comment.findAll({
      where: {
        userId: clientId
      }
    });
  }
};
