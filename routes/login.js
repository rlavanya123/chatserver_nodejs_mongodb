var express = require('express');
var passport = require('passport');
var router = express.Router();
var LocalStrategy = require('passport-local').Strategy;

router.get('/', function(req, res) {
  res.sendfile('views/login.html');
});

router.post('/',
  passport.authenticate('local', {
    successRedirect: '/loginSuccess',
    failureRedirect: '/loginFailure'
  })
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new LocalStrategy(function(username, password, done) {
    return done(null, false);
}));

module.exports = router;
