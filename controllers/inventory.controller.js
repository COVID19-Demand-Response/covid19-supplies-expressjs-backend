var express = require('express');

let inventoryController = {
    add: function(req, res) {
        console.log('controller called');
    },
    update: function(req, res) {
        console.log('controller called');
    },
    delete: function(req, res) {
        console.log('controller called');
    },
    view: function(req, res) {
        console.log('controller called');
    },
    search: function(req, res) {
        console.log('controller called');
    }
};


module.exports = inventoryController;