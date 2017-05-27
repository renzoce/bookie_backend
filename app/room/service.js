var Room = require('./room')

module.exports = {
  getRooms: function() {
    return Room.findAll();
  },

  getRoom: function() {
    return null;
  }
};
