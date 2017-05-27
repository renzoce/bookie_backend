var RoomAvailability = require('./roomAvailability')

module.exports = {
  getRoomAvailabilities: function() {
    return RoomAvailability.findAll();
  },

  getRoomAvailability: function() {
    return null;
  }
};
