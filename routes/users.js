var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controller.js');

// Update password
router.post('/updatePassword', function(req, res, next) {
  userController.updatePassword(req, res);
  res.send({status: true});
});

// Update User Profile
router.post('/updateProfile', function(req, res, next) {
  userController.updateProfile(req, res);
  res.send({status: true});
});

router.get('/viewProfile', async function(req, res, next) {
  let data = await userController.viewProfile(req, res);
  res.send({status: true, data: data});
});

// Login
router.post('/login', function(req, res, next) {
  userController.login(req, res);
  res.send({status: true});
});

// Logout
router.post('/logout', function(req, res, next) {
  userController.logout(req, res);
  res.send({status: true});
});

module.exports = router;
