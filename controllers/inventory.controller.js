var express = require('express');
var dataAccess = require('../data-access/mongo.dataaccess');

// Regular users must only be able to modify / delete their inventories
// Admin - full access
let inventoryController = {
    add: function(req, res) {
        dataAccess.add('inventory', req.body);
    },
    update: function(req, res) {
        let inventory = this.initializeForUpdate(req.body);
        dataAccess.update('inventory', inventory);
    },
    delete: function(req, res) {
        dataAccess.delete('inventory', req.body._id);
    },
    view: async function(req, res) {
        let data = await dataAccess.view('inventory', req.query._id);
        return data;
    },
    search: function(req, res) {
        console.log('controller called');
    },
    initializeForUpdate: function(inventory) {
        delete inventory.user_id;
        delete inventory.created_by;
        delete inventory.created_date;
        return inventory;
    }
};


module.exports = inventoryController;