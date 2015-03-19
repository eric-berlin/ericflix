'use strict';

function HomeCtrl($scope, $http, $routeParams, homeService) {

    var _this = this;
    var app   = new appHtml();

    this.updateSearch = function(search) {
        $('.progress').animate({'opacity':1});
        homeService.getSearch(search).success(function(data) {
            $('.progress').animate({'opacity':0});
            var movies   = data;
            _this.movies = movies;
        });
    }

    $scope.showFiles = function(movie) {
        var hash = movie.hash;
        $('.progress').animate({'opacity':1});
        homeService.getFiles(hash).success(function(data) {
            _this.choose = {};
            _this.choose.hash = hash;
            $('.progress').animate({'opacity':0});
            _this.choose.files  = data.files;
            _this.choose.name   = data.name;
            _this.choose.health = movie.health;

            $('.'+hash).css({'display':'initial'});

            app.init();
        });
    }

    $scope.$on('searchMovie', function(event, search) {
        _this.updateSearch(search);
    })


    _this.updateSearch('yify');

    $(function() {
        app.init();
    })
}

angular.module('ericflixApp').controller('HomeCtrl',['$scope', '$http', '$routeParams', 'homeService', HomeCtrl]);