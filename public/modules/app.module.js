'use strict';

function config($routeProvider, $locationProvider) {
    
    $routeProvider
        .when('/', {
            templateUrl  : '/modules/components/home/home.view.html',
            controller   : 'HomeCtrl',
            controllerAs : 'home'
        })
        .when('/watch/:hash', {
            templateUrl  : '/modules/components/watch/watch.view.html',
            controller   : 'watchCtrl',
            controllerAs : 'watch'
        })
        .otherwise('/');

    //$locationProvider.html5Mode({enabled: true, requireBase: false});
}

angular.module('ericflixApp',['ngRoute', 'ngSanitize', 'com.2fdevs.videogular', 'com.2fdevs.videogular.plugins.controls', 'com.2fdevs.videogular.plugins.overlayplay']).config(["$routeProvider", "$locationProvider" ,config]);