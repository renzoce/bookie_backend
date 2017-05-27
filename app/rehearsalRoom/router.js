var RehearsalRoom = require('./service.js')
var express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
  next()
});

router.get('/', function(req, res) {
  RehearsalRoom.getRehearsalRoom().then(rehearsalRoom => {
    res.send(rehearsalRoom);
  });
});

module.exports = router;
