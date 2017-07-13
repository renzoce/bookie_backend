'use strict';
var cryptoUtils = require('./crypto-utils.js');
var jwt = require('jsonwebtoken');
var db = require('../config/db-config.js')
var jwtOptions = require("../../config/config.js").jwt;

module.exports = {
  login: login,
  signIn: signIn
};


function login(email, password) {
  return db.User.findOne({
    where: {
      email: email
    }
  }).then(user => {
    if (user) {
      var passwordHash = cryptoUtils.sha512(password, user.salt).passwordHash;
      if (user.password === passwordHash) {
        var payload = {
          id: user.userId
        };
        var token = jwt.sign(payload, jwtOptions.jwtSecret);
        return token;
      }
    }
  })
}

function signIn(email, password) {
}
