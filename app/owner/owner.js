module.exports = function(sequelize, DataTypes) {
  var Owner = sequelize.define('Owner', {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    rut: {
      type: DataTypes.STRING,
    },
    documentCI: {
      type: DataTypes.STRING,
    }
  }, {
    classMethods: {
      associate: function(models) {
        Owner.belongsTo(models.User, {
          foreignKey: 'userId'
        })
      }
    }
  });
  return Owner;
};
