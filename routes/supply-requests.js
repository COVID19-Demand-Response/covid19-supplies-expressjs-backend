var express = require('express');
var router = express.Router();
const supplyRequestController = require('../controllers/supply-request.controller.js');

// Update password
router.post('/add', function(req, res, next) {
  supplyRequestController.add(req, res);
  res.send({status: true});
});

// Update User Profile
router.post('/update', function(req, res, next) {
  supplyRequestController.update(req, res);
  res.send({status: true});
});

router.get('/view', async function(req, res, next) {
  let data = await supplyRequestController.view(req, res);
  res.send({status: true, data: data});
});

// Login
router.post('/delete', function(req, res, next) {
  supplyRequestController.delete(req, res);
  res.send({status: true});
});

module.exports = router;
