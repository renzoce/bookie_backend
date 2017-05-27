module.exports = function(sequelize, DataTypes) {

  var Owner = sequelize.define('Owner', {
  }, {
    classMethods: {
      associate: function(models) {}
    }
  });
  return Owner;
};
