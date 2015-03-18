'use strict';

function watchService($http) {

    this.getWatch = function(hash, filename) {
        return $http.get('http://localhost:3000/api/watch/'+hash+'?filename='+filename);
    };

}

angular.module('ericflixApp').service('watchService',['$http', watchService]);