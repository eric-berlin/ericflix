var kickass = require('kickass-torrent');

var kickme = function() {

    this.getList = function(res, search) {

        var options = {
            q     : search,
            field :'seeders',
            order :'desc',
        }

        kickass(options,function(e, data) {
            if(e) return console.log(e)
            res.json(data.list);
        })
    }

};

module.exports = new kickme();