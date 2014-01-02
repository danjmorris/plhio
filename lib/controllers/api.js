'use strict';

var mongoose = require('mongoose'),
User = mongoose.model('User'),
async = require('async');

exports.allUsers = function(req, res) {
    User.find(function(err, users) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(users);
        }
    });
};
