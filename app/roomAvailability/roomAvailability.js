module.exports = function(sequelize, DataTypes) {

  var RoomAvailability = sequelize.define('RoomAvailability', {
    day: {
      type: DataTypes.STRING
    },
    opening: {
      type: DataTypes.STRING
    },
    closing: {
      type: DataTypes.STRING
    }
  });
  return RoomAvailability;
};
