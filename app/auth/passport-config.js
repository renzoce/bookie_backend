var passport = require("passport");
var passportJWT = require("passport-jwt");
var db = require('../config/db-config.js')
var config = require("../../config/config.js").jwt;
var ExtractJwt = passportJWT.ExtractJwt;
var Strategy = passportJWT.Strategy;

var params = {
  secretOrKey: config.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeader()
};

module.exports = function() {
  var strategy = new Strategy(params, function(payload, done) {

    db.User.findById(payload.id).then(user => {
      if (user) {
        return done(null, {
          id: user.id
        });
      } else {
        return done(new Error("User not found"), null);
      }
    }).catch(
      (reason) => {
        return done(new Error("User not found"), null);
      });

  });
  passport.use(strategy);
  return {
    initialize: function() {
      return passport.initialize();
    }
  };
};
