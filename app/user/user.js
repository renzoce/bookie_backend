var Sequelize = require('sequelize');
var sequelize = require('../config/db-config.js');

var User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});

module.exports = User;
