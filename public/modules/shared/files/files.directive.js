'use strict';

function showFiles($rootScope)
{
    return {
        templateUrl : '/modules/shared/files/files.view.html',
        restrict    : 'E',
        scope       : {
            choose : "="
        },

        link : function(scope) {
            var app = new appHtml();
            app.init();
        }

    }
}


angular.module('ericflixApp').directive('showFiles', ['$rootScope', showFiles]);