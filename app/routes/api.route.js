var express = require('express');
var router  = express.Router();
var kickass = require('../services/kickass/kickass.api.service.js');

/* GET home page. */
router.get('/api/kickass/:search', function(req, res) {
  
    kickass.getList(res, req.params.search);

});

module.exports = router;
