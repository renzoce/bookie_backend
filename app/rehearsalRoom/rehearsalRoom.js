module.exports = function(sequelize, DataTypes) {

  var RehearsalRoom = sequelize.define('RehearsalRoom', {
    rehearsalRoomId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    },
    latitude: {
      type: DataTypes.STRING
    },
    longitude: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    cellPhone: {
      type: DataTypes.STRING
    },
    mainImgUrl: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    rating: {
      type: DataTypes.DOUBLE
    },
    pricePerHour: {
      type: DataTypes.DOUBLE
    }
  }, {
    classMethods: {
      associate: function(models) {
        RehearsalRoom.hasMany(models.Comment, {
            foreignKey: 'rehearsalRoomId'
          }),
          RehearsalRoom.hasMany(models.Image, {
            foreignKey: 'rehearsalRoomId'
          }),
          RehearsalRoom.hasMany(models.RoomAvailability, {
            foreignKey: 'rehearsalRoomId'
          }),
          RehearsalRoom.hasMany(models.Booking, {
            foreignKey: 'rehearsalRoomId'
          });
      }
    }
  });

  return RehearsalRoom;
};
