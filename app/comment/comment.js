module.exports = function(sequelize, DataTypes) {

  var aComment = sequelize.define('Comment', {
    commentId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    body: {
      type: DataTypes.STRING
    }
  });
  return aComment;
};
