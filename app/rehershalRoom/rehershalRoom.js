module.exports = function(sequelize, DataTypes) {

  var RehershalRoom = sequelize.define('RehershalRoom', {
    rehershalRoomId: {
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
    username: {
      type: DataTypes.STRING
    },
    latitude: {
      type: DataTypes.STRING
    },
    longitude: {s.DATE
    },
    phone:
    }
    phone: {
      type: DataTypes.STRING
    },
    cellphone: {
      type: DataTypes.STRING
    },
    mainImgUrl: {
      type: DataTypes.STRING
    },
    aboutMe: {
      type: DataTypes.STRING
    },
    rating: {
      type: DataTypes.DOUBLE
    }
  }, {
    classMethods: {
      associate: function(models) {
        RehershalRoom.hasMany(models.Comment, {
          //foreignKey: 'userId'
        })
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        RehershalRoom.hasMany(models.Image, {
          //foreignKey: 'userId'
        })
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        RehershalRoom.hasMany(models.RoomAvailability, {
          //foreignKey: 'userId'
        })
      }
    }
  });

  return RehershalRoom;
};
