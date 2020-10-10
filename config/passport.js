const JWTS = require("passport-jwt").Strategy;
const EJWT = require("passport-jwt").ExtractJwt;

const mongoose = require("mongoose");
const { secretOrKey } = require("../config/keys");
const User = mongoose.model("users");
const keys = require("../config/keys");

const opts = {};
console.log(secretOrKey, "this is the secret")

opts.jwtFromRequest = EJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
    passport.use(
        new JWTS(opts, (jwt_payload, done) => {
            User.findById(jwt_payload.id)
            .then(user => {
                if (user) {
                    return done(null, user);
                }
                return done(null, false);
            })
            .catch(err => console.log(err));
        })
    );
};
