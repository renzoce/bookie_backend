var Owner = require('./owner')

module.exports = {
  getOwners: function() {
    return Owner.findAll();
  },

  getOwner: function() {
    return null;
  }
};
