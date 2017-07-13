module.exports = function(sequelize, DataTypes) {

  var User = sequelize.define('User', {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    isOwner: {
      type: DataTypes.BOOLEAN
    },
    password: {
      type: DataTypes.STRING
    },
    salt: {
      type: DataTypes.STRING
    }
  });

  return User;
};
