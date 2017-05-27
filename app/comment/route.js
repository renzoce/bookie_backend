var aComment = require('./service.js')
var express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
  next()
});

router.get('/', function(req, res) {
  aComment.getComments().then(comments => {
    res.send(comments);
  });
});

module.exports = router;
