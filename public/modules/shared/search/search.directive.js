'use strict';

/**
 * Directive permettant de faire une nouvelle recherche
 */
function searchTorrent ($rootScope, $location)
{
    return {
        templateUrl : '/modules/shared/search/search.view.html',
        restrict    : 'E',

        link: function(scope) {
            
            scope.search = function() {
                if($location.path() == '/') {
                    $rootScope.$broadcast('searchMovie', scope.data.movie);
                } 
                else {
                    $location.path('/');
                    $rootScope.$on('$routeChangeSuccess', function() {
                        console.log("salut");
                        $rootScope.$broadcast('searchMovie', scope.data.movie);
                    });
                }
            }
        
        }
    }
}

angular.module('ericflixApp').directive('searchTorrent', ['$rootScope', '$location', searchTorrent]);