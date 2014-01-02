'use strict';

var express = require('express'),
mongoStore = require('connect-mongo')(express),
flash = require('connect-flash'),
helpers = require('view-helpers'),
path = require('path'),
fs = require('fs'),
config = require('./config');

module.exports = function(app, passport, db) {
    var rootPath = path.normalize(__dirname + '/../..');

    app.configure('development', function(){
        app.use(require('connect-livereload')());

        // Disable caching of scripts for easier testing
        app.use(function noCache(req, res, next) {
            if (req.url.indexOf('/scripts/') === 0) {
                res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
            }
            next();
        });

        app.use(express.static(path.join(rootPath, '.tmp')));
        app.use(express.static(path.join(rootPath, 'app')));
        app.use(express.errorHandler());
        
        app.set('views', rootPath + '/lib/views');
    });

    app.configure('production', function(){
        app.use(express.favicon(path.join(rootPath, 'public', 'favicon.ico'))); 
        app.use(express.static(path.join(rootPath, 'public')));
        app.set('views', rootPath + '/lib/views'); //no lib for grunt:dist
    });

    app.configure(function(){
        
        app.engine('html', require('ejs').renderFile);
        app.set('view engine', 'html');
        
        app.use(express.logger('dev'));
        
        app.enable("jsonp callback");

        //cookieParser should be above session
        app.use(express.cookieParser());

        //express/mongo session storage
        app.use(express.session({
            secret: 'MEAN',
            store: new mongoStore({
                db: db.connection.db,
                collection: 'sessions'
            })
        }));

        //connect flash for flash messages
        app.use(flash());

        //dynamic helpers
        app.use(helpers(config.app.name));
        
        // request body parsing middleware should be above methodOverride
        app.use(express.urlencoded());
        app.use(express.json());
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        
        app.use(passport.initialize());
        app.use(passport.session());
        
        // Router needs to be last
        app.use(app.router);
    });
};
