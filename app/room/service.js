var db = require('../config/db-config')

module.exports = {
  getRooms: function() {
    return db.Room.findAll();
  },

  getRoom: function() {
    return null;
  }
};
