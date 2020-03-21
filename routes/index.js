var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controller.js');

// Register Account
router.put('/register', function(req, res, next) {
  userController.registerUser(req, res);
  res.send({status: true});
});

// Un-Register Account
router.post('/unregister', function(req, res, next) {
  userController.unRegisterUser(req, res);
  res.send({status: true});
});

module.exports = router;
