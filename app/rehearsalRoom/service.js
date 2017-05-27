var RehearsalRoom = require('./rehearsalRoom')

module.exports = {
  getRehearsalRooms: function() {
    return RehearsalRoom.findAll();
  },

  getRehearsalRoom: function() {
    return null;
  }
};
