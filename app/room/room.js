module.exports = function(sequelize, DataTypes) {

  var Room = sequelize.define('Room', {
    roomId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: function(models) {
        Room.belongsTo(models.Owner, {
          foreignKey: 'userId'
        }),
        Room.hasMany(models.RehearsalRoom, {
            foreignKey: 'roomId'
        })
      }
    }
  });
  return Room;
};
