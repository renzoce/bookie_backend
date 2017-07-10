var db = require('../config/db-config')

module.exports = {

  findAll: function() {
    return db.Comment.findAll();
  },

  findById: function(commentId) {
    return db.Comment.findById(commentId);
  },

  save: function(comment) {
    return db.Comment.create(comment);
  }

}
