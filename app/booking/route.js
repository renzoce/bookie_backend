var Booking = require('./service.js')
var Dao = require('./dao.js')
var express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
  next()
});

router.get('/', function(req, res) {
  Booking.getBookings().then(bookings => {
    res.send(bookings);
  });
});

router.post('/', function(req, res) {
  Dao.save(req.body.booking).then(booking => {
    res.send(booking);
  })
});

module.exports = router;
