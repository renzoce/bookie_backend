module.exports = function(sequelize, DataTypes) {

  var Image = sequelize.define('Image', {
    imageId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    imgUrl: {
      type: DataTypes.STRING
    },
    priority: {
      type: DataTypes.INTEGER
    }
  });

  return Image;
};
