var RehearsalRoom = require('./service.js')
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  RehearsalRoom.getRehearsalRooms().then(rehearsalRoom => {
    res.send(rehearsalRoom);
  });
});

router.get('/:roomId', function(req, res) {
  RehearsalRoom.getRehearsalRoom(req.params.roomId).then(response => {
    res.send(response);
  });
});

router.get('/:roomId/comments', function(req, res) {
  RehearsalRoom.getRehearsalRoomComments(req.params.roomId).then(response => {
    res.send(response);
  });
});

router.get('/:roomId/images', function(req, res) {
  RehearsalRoom.getRehearsalRoomImages(req.params.roomId).then(response => {
    res.send(response);
  });
});

router.get('/:roomId/availability', function(req, res) {
  RehearsalRoom.getAvailabilityByRoom(req.params.roomId).then(response => {
    res.send(response);
  });
});

module.exports = router;
