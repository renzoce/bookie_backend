var ClientService = require('./service.js')
var Client = require('./dao.js')
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  Client.findAll().then(response => {
    res.send(response);
  });
});

router.get('/:clientId', function(req, res) {
  Client.findById(req.params.clientId).then(response => {
    res.send(response);
  });
});

router.get('/:clientId/bookings', function(req, res) {
  Client.getClientBookings(req.params.clientId).then(response => {
    res.send(response);
  });
});

router.get('/:clientId/comments', function(req, res) {
  Client.getClientComments(req.params.clientId).then(response => {
    res.send(response);
  });
});

module.exports = router;
