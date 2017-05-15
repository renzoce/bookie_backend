var sequelize = require('./app/config/db-config.js');
var users = require('./app/user/route.js');

var express = require('express');
var app = express();

const port = 3000;

app.listen(port, function() {
  console.log('Listening on port ' + port);
})

app.use('/users', users);
