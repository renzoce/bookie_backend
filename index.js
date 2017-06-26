var sequelize = require('./app/config/db-config.js');
var bodyParser = require('body-parser');
var users = require('./app/user/route.js');
var bookings = require('./app/booking/route.js');
var rooms = require('./app/room/route.js');
var rehearsalRooms = require('./app/rehearsalRoom/route.js');
var roomAvailability = require('./app/roomAvailability/route.js');

var express = require('express');
var app = express();

const port = 3000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.listen(port, function() {
  console.log('Listening on port ' + port);
})

app.use('/users', users);
app.use('/bookings', bookings);
app.use('/rooms', rooms);
app.use('/rehearsalRooms', rehearsalRooms);
app.use('/roomAvailability', roomAvailability);

//Jenkins test
console.log("Automatically built after jenkins integration #3");
