'use strict';

function homeService($http) {

    this.getSearch = function(search) {
        return $http.get('http://localhost:3000/api/kickass/'+search);
    };

    this.getFiles = function(hash) {
        return $http.get('http://localhost:3000/api/files/'+hash);
    }

}

angular.module('ericflixApp').service('homeService',['$http', homeService]);