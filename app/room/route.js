var Room = require('./service.js')
var express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
  next()
});

router.get('/', function(req, res) {
  Room.getRooms().then(rooms => {
    res.send(rooms);
  });
});

module.exports = router;
