module.exports = function(sequelize, DataTypes) {

  var Booking = sequelize.define('Booking', {
    bookingId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "bookingId"
    },
    duration: {
      type: DataTypes.DOUBLE
    },
    startDate: {
      type: DataTypes.DATE
    },
    invoiceAmount: {
      type: DataTypes.DOUBLE
    },
    description: {
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: function(models) {
        Booking.belongsTo(models.Client, {
          foreignKey: 'userId'
        });
      }
    }
  });
  return Booking;
};
