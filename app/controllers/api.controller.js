'use strict';

var express = require('express');
var router  = express.Router();
var kickass = require('../services/kickass/kickass.api.service.js');
var watch   = require('../services/watch/watch.api.service.js');

/**
 * Controlleur qui permet de charger la recherche d'un torrent
 * @param {Object} req
 * @param {Object} res
 */
exports.kickass = function(req, res) {
    
    kickass.getList(res, req.params.search);

};

/**
 * Controlleur qui permet de recuperer tous les fichiers d'un torrent
 * @param {Object} req
 * @param {Object} res
 */
exports.torrentFiles = function(req, res) {

    watch.getTorrentFiles(res, req.params.hash);

}

/**
 * Controlleur qui permet de mettre un torrent en cache
 * @param {Object} req
 * @param {Object} res
 */
exports.watch = function(req, res) {

    watch.getTorrent(res, req.params.hash, req.query.filename)

}

/**
 * Controlleur qui permet d'arreter de streamer un torrent
 * @param {Object} req
 * @param {Object} res
 */
exports.stopWatch = function(req, res) {

    watch.stopWatch(res, req.params.hash);

}