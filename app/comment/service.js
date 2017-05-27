var aComment = require('./comment')

module.exports = {
  getComments: function() {
    return aComment.findAll();
  },

  getComment: function() {
    return null;
  }
};
