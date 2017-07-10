var aComment = require('./dao.js')
var express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
  next()
});

router.get('/', function(req, res) {
  aComment.findAll().then(comments => {
    res.send(comments);
  });
});

router.get('/:commentId', function(req, res) {
  aComment.findById(req.params.commentId).then(response => {
    res.send(response);
  });
});

module.exports = router;
