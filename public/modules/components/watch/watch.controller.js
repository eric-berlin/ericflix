'use strict';

function watchCtrl($scope, $http, $routeParams, $location, watchService) {

    var _this = this;
    _this.search = $routeParams.hash;
    $('.progress').animate({'opacity':1});

    watchService.getWatch(_this.search, $location.search().filename).success(function(data) {
        $('.progress').animate({'opacity':0});
        var hash = data;
        _this.hash = hash;

        _this.video     = {};
        _this.video.src = 'http://localhost:3000/tmp/myfile/'+data.torrentpath;
    });
}

angular.module('ericflixApp').controller('watchCtrl',['$scope', '$http', '$routeParams', '$location', 'watchService', watchCtrl]);