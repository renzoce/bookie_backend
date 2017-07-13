var express = require('express');
var AuthService = require('./service.js')
var auth = require('./passport-config.js')
var passport = require("passport");
var router = express.Router();

router.post("/login", function(req, res) {
  var email = req.body.email;
  var password = req.body.password;

  AuthService.login(email, password).then(token => {
    if (token) {
      res.json({
        token: token
      });
    } else {
      res.sendStatus(401);
    }
  });
});

//TEMP
router.get("/login", function(req, res) {
  var email = "john@gmail.com";
  var password = "1234";

  AuthService.login(email, password).then(token => {
    if (token) {
      res.json({
        token: token
      });
    } else {
      res.sendStatus(401);
    }
  });
});

router.get("/secret", passport.authenticate('jwt', {
  session: false
}), function(req, res) {
  res.json({
    message: "Success! You can not see this without a token"
  });
});

module.exports = router;
