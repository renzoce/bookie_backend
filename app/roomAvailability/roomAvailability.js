module.exports = function(sequelize, DataTypes) {

  var RoomAvailability = sequelize.define('RoomAvailability', {
    dayNumber: {
      type: DataTypes.INTEGER
    },
    day: {
      type: DataTypes.STRING
    },
    opening: {
      type: DataTypes.INTEGER
    },
    closing: {
      type: DataTypes.INTEGER
    }
  });
  return RoomAvailability;
};
