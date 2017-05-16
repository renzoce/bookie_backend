var User = require('./user')

module.exports = {
  getUsers: function() {
    return User.findAll();
  },

  getUser: function() {
    return null;
  }
};
