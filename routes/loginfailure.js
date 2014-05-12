var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get('/', function(req, res) {
  res.sendfile('views/login.html');
});

module.exports = router;
