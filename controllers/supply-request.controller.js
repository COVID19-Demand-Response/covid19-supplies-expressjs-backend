var express = require('express');

let supplyRequestController = {
    add: function(req, res) {
        dataAccess.add(req.app, 'supply_request', req.body);
    },
    update: function(req, res) {
        dataAccess.update(req.app, 'supply_request', req.body);
    },
    delete: function(req, res) {
        dataAccess.delete(req.app, 'supply_request', req.body._id);
    },
    view: async function(req, res) {
        let data = await dataAccess.view(req.app, 'supply_request', req.query._id);
        return data;
    },
    search: function(req, res) {
        console.log('controller called');
    }
};


module.exports = supplyRequestController;