(function () {
    'use strict';

    angular
        .module('ng-easy-crud')
        .service('ecrudLocation', ecrudLocation);
    
    ecrudLocation.$inject = ['$location'];

    function ecrudLocation($location) {
	return {
	    getQuery: function() {
		var query = $location.search();
		console.log(query);
		if (query.page === undefined) {
	    	    query.page = 1;
		}
		if (query.search === undefined) {
		    query.search = '';
		}
		if (query.ordering === undefined) {
		    query.ordering = '-date_create';
		}
		return query;
		},
	    updateQuery: function(query) {
		for (var key in query) {
		    $location.search(key, query[key]);
		}
	    }
        }
    }
})();
