/**
 * @Author: Khalid Elshafie <khalid>
 * @Date:   2017-09-30T21:59:40+09:00
 * @Email:  Khalid@abolkog.com
 */

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');

module.exports = function (passport) {

  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = process.env.SECRET;

  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    User.findById(jwt_payload.user._id, (err, user) => {
      if(err) {
        return done(err, false);
      }

      if (user) {
        return done(null, user);
      }
    });
  }));

}
