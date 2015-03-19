var kickass = require('kickass-torrent');
var Q       = require('q');
var _       = require('lodash');

var kickme = function() {

    var self = this;

    this.getList = function(res, search) {

        var options = {
            q     : search,
            field :'seeders',
            order :'desc',
        }

        kickass(options,function(e, data) {
            if(e) return console.log(e)
            
            self.cleanList(data.list).then(function(list) {
                res.json(list);
            })
        })
    }

    this.cleanList = function(data) {
        
        var deferred = Q.defer();

        deferred.resolve(
            _.chain(data)
                .filter(function(v) {
                    return v.title.indexOf('avi') == -1;
                })
                .map(function(v) {
                    
                    var health = 'alert';
                    if(v.seeds > 30 && v.seeds < 90) {
                        health = 'info';
                    } else if(v.seeds >= 90) {
                        health = 'success';
                    }
                    
                    return _.assign({}, v, {health: health});
                })
                .value()
        );

        return deferred.promise;
    }

};

module.exports = new kickme();