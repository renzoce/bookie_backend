var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");

var db = {};
var sequelize = new Sequelize('test', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

fs
  .readdirSync(__dirname + '/../')
  .filter(function(file) {
    return (file.indexOf("config") !== 0);
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname + '/../' + file, file + '.js'));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sequelize.sync()
/*.then(() => db.Booking.create({
   duration: 120,
   startDate: new Date(),
   startTime: 780,
   invoiceAmount: 200,
   description: "Segunda Bookie"
 }))*/

module.exports = db;
