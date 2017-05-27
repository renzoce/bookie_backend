module.exports = function(sequelize, DataTypes) {

//TODO Agregar settings de la app
//Agregar configuracionesa de pago
//Agregar tokens de login (fb, google, etc)

  var Client = sequelize.define('Client', {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    googleAcc: {
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: function(models) {
        Client.belongsTo(models.User, {
          foreignKey: 'userId'
        })
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        Client.hasMany(models.Booking, {
          //foreignKey: 'userId'
        })
      }
    }
  });
  return Client;
};
