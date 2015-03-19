'use strict';

/**
 * Directive permettant de faire une nouvelle recherche
 */
function efVideo($rootScope, $sce)
{
    return {
        templateUrl : '/modules/shared/video/video.view.html',
        restrict    : 'E',
        scope: {
            source : "@"
        },

        link: function(scope) {
            console.log(scope.source);
            scope.config = {
                sources: [
                    {src: $sce.trustAsResourceUrl(scope.source), type: "video/mp4"},
                ],
                
                // tracks: [
                //     {
                //         src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
                //         kind: "subtitles",
                //         srclang: "en",
                //         label: "English",
                //         default: ""
                //     }
                // ],
                theme: "assets/lib/videogular-themes-default/videogular.css",
            };
        }
    }
}

angular.module('ericflixApp').directive('efVideo', ['$rootScope', '$sce', efVideo]);