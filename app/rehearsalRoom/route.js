var RehearsalRoomService = require('./service.js')
var RehearsalRoom = require('./dao.js')
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  RehearsalRoom.findAll().then(rehearsalRoom => {
    res.send(rehearsalRoom);
  });
});

router.get('/:roomId', function(req, res) {
  RehearsalRoom.findById(req.params.roomId).then(response => {
    res.send(response);
  });
});

router.get('/:roomId/comments', function(req, res) {
  RehearsalRoom.getComments(req.params.roomId).then(response => {
    res.send(response);
  });
});

router.get('/:roomId/images', function(req, res) {
  RehearsalRoom.getImages(req.params.roomId).then(response => {
    res.send(response);
  });
});

router.get('/:roomId/availability', function(req, res) {
  RehearsalRoomService.getAvailabilityByRoom(req.params.roomId).then(response => {
    res.send(response);
  });
});

module.exports = router;
