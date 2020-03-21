var express = require('express');
var dataAccess = require('../data-access/mongo.dataaccess');

let inventoryController = {
    add: function(req, res) {
        dataAccess.add(req.app, 'inventory', req.body);
    },
    update: function(req, res) {
        dataAccess.update(req.app, 'inventory', req.body);
    },
    delete: function(req, res) {
        dataAccess.delete(req.app, 'inventory', req.body._id);
    },
    view: async function(req, res) {
        let data = await dataAccess.view(req.app, 'inventory', req.query._id);
        return data;
    },
    search: function(req, res) {
        console.log('controller called');
    }
};


module.exports = inventoryController;