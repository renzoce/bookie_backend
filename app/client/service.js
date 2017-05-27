var Client = require('./client')

module.exports = {
  getClients: function() {
    return Client.findAll();
  },

  getClient: function() {
    return null;
  }
};
