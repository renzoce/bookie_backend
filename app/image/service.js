var Image = require('./image')

module.exports = {
  getImages: function() {
    return Image.findAll();
  },

  getImage: function() {
    return null;
  }
};
