'use strict';
var crypto = require('crypto');
var db = require('../config/db-config.js')

var genRandomString = function(length) {
  return crypto.randomBytes(Math.ceil(length / 2))
    .toString('hex')
    .slice(0, length); 
};

var sha512 = function(password, salt) {
  var hash = crypto.createHmac('sha512', salt);
  hash.update(password);
  var value = hash.digest('hex');
  return {
    salt: salt,
    passwordHash: value
  };
};

function saltHashPassword(userpassword) {
  var salt = genRandomString(64);
  var passwordData = sha512(userpassword, salt);
}

module.exports = {
  saltHashPassword: saltHashPassword,
  sha512: sha512
};
