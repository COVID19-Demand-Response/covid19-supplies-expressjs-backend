var express = require('express');
var dataAccess = require('../data-access/mongo.dataaccess');

let userController = {
    registerUser: function(req, res) {
        console.log(req.body);
        dataAccess.add(req.app, 'users', req.body);
    },
    unRegisterUser: function(req, res) {
        dataAccess.delete(req.app, 'users', req.body._id);
    },
    updatePassword: function(req, res) {
        dataAccess.update(req.app, 'users', req.body);
    },
    updateProfile: function(req, res) {
        console.log(req.body);
        dataAccess.update(req.app, 'users', req.body);
    },
    viewProfile: async function(req, res) {
        let data = await dataAccess.view(req.app, 'users', req.query._id);
        return data;
    },
    login: function(req, res) {
        console.log('controller called');
    },
    logout: function(req, res) {
        console.log('controller called');
    },
    search: function(req, res) {
        console.log('controller called');
    }
};


module.exports = userController;