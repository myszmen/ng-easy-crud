(function () {
    'use strict';

    angular
        .module('ng-easy-crud')
        .directive('ecrudSearch', ecrudSearch);
    
    ecrudSearch.$inject = ['$location'];

    function ecrudSearch($location) {
        var directive = {
            restrict: 'E',
            transclude: true,
            scope: {},
            templateUrl: getTemplatePath,
            link: link
        };
        return directive;

        function getTemplatePath(element, attrs) {
            return attrs.ecrudTemplate;
        }

        function link(scope, element, attrs) {
            scope.updateQuery = updateQuery;
	        scope.search = $location.search().search

            function updateQuery() {
                if(scope.search) {
	                $location.search('search', scope.search);
                } else {
	                $location.search('search', null);
                }
            }
        }
    }
})();
