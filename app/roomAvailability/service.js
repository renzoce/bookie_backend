var db = require('../config/db-config')

module.exports = {
  getRoomAvailabilities: function() {
    return db.RoomAvailability.findAll();
  },

  getAvailabilityByRoom: function(roomId) {
    return db.RoomAvailability.findAll ({
      where: {
        rehearsalRoomId: roomId
      }
    });
  },

  getRoomAvailability: function() {
    return null;
  }
};
