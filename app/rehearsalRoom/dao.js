var db = require('../config/db-config')

module.exports = {

  findAll: function() {
    return db.RehearsalRoom.findAll();
  },

  findById: function(roomId) {
    return db.RehearsalRoom.findById(roomId);
  },

  getComments: function(roomId) {
    return db.Comment.findAll({
      where: {
        rehearsalRoomId: roomId
      }
    });
  },

  getImages: function(roomId) {
    return db.Image.findAll({
      where: {
        rehearsalRoomId: roomId
      }
    });
  },
}
