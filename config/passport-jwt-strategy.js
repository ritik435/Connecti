const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const User = require('../models/user');

const ExtractJwt = require('passport-jwt').ExtractJwt;
let opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(),
    opts.secretOrKey = 'connecti'


passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findById(jwt_payload._id, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));




module.exports=passport;