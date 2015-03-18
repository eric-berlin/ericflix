'use strict';

var api   = require('../controllers/api.controller');
var front = require('../controllers/front.controller');

/**
 * Liste des routes
 * @param {Object} app
 * @param {Object} passport
 **/
module.exports = function(app) {

    /*
     * API Controller
     */
    app.get('/api/kickass/:search', api.kickass);
    app.get('/api/files/:hash', api.torrentFiles);
    app.get('/api/watch/:hash', api.watch);
    app.get('/api/watch/:hash/stop', api.stopWatch);

    /*
     * FRONT Controller
     */
    app.get('/*', front.handle);
};
