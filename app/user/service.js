var db = require('../config/db-config')

module.exports = {
  getUsers: function() {
    return db.User.findAll();
  },

  getUser: function() {
    return null;
  }
};
