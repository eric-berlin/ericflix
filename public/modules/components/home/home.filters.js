angular.module('ericflixApp').filter('formatSize', function() {
    return function(input) {
        var mo = parseInt(input/1000000, 10);
        return mo > 999 ? (mo/1000).toFixed(2)+' GB' : mo+' MB';
    }
});

angular.module('ericflixApp').filter('trim', function() {
    return function(input, length) {
        var input  = input || '';
        var output = '';

        if(input.length > length) {
            output += input.substring(0, length) + '...';
        } else {
            output = input;
        }

        return output;
    }
});