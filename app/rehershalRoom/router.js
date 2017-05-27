var RehershalRoom = require('./service.js')
var express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
  next()
});

router.get('/', function(req, res) {
  RehershalRoom.getRehershalRooms().then(rehershalRooms => {
    res.send(rehershalRooms);
  });
});

module.exports = router;
