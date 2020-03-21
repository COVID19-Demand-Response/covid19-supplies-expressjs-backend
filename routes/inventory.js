var express = require('express');
var router = express.Router();
const inventoryController = require('../controllers/inventory.controller.js');

// Update password
router.put('/add', function(req, res, next) {
  inventoryController.add(req, res);
  res.send({status: true});
});

// Update User Profile
router.post('/update', function(req, res, next) {
  inventoryController.update(req, res);
  res.send({status: true});
});

router.get('/view', async function(req, res, next) {
  let data = await inventoryController.view(req, res);
  res.send({status: true, data: data});
});

// Login
router.post('/delete', function(req, res, next) {
  inventoryController.delete(req, res);
  res.send({status: true});
});

module.exports = router;
