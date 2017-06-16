var RehearsalRoom = require('./service.js')
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  RehearsalRoom.getRehearsalRooms().then(rehearsalRoom => {
    res.send(rehearsalRoom);
  });
});

router.get('/:roomId/availability', function(req, res) {
  RehearsalRoom.getAvailabilityByRoom(req.params.roomId).then(response => {
    res.send(response);
  });
});

module.exports = router;
