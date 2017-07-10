var BookingService = require('./service.js')
var Booking = require('./dao.js')
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  Booking.findAll().then(response => {
    res.send(response);
  });
});

router.get('/:bookingId', function(req, res) {
  Booking.findById(req.params.bookingId).then(response => {
    res.send(response);
  });
});

router.post('/', function(req, res) {
  Booking.saveBooking(req.body.booking).then(response => {
    res.send(response);
  })
});

module.exports = router;
