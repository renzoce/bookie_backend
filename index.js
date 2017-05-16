var sequelize = require('./app/config/db-config.js');
var users = require('./app/user/route.js');
var bookings = require('./app/booking/route.js');

var express = require('express');
var app = express();

const port = 3000;

app.listen(port, function() {
  console.log('Listening on port ' + port);
})

app.use('/users', users);
app.use('/bookings', bookings);
