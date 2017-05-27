var Owner = require('./service.js')
var express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
  next()
});

router.get('/', function(req, res) {
  User.getOwners().then(owners => {
    res.send(owners);
  });
});

module.exports = router;
