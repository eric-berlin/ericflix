'use strict';

var express = require('express');
var router  = express.Router();

/**
 * Contrôleur qui permet de rediriger vers la bonne méthode de l'api
 * @param {Object} req
 * @param {Object} res
 */
exports.handle = function(req, res) {
    
    return res.render('layout.html');

};