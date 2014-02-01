'use strict';

var api = require('./api'),
    index = require('./index');

module.exports = function(app) {

    // Server Routes
    app.get('/api/awesomeThings', api.awesomeThings);
    
    // Angular Routes
    app.get('/partials/*', index.partials);
    app.get('/*', index.index);
    
};
