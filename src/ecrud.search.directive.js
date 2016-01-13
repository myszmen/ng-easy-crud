(function () {
    'use strict';

    angular
        .module('ng-easy-crud')
        .directive('ecrudSearch', ecrudSearch);
    
    ecrudSearch.$inject = ['ecrudLocation'];

    function ecrudSearch(ecrudLocation) {
        var directive = {
            restrict: 'E',
            //transclude: true,
            //scope: {},
            templateUrl: getTemplatePath,
            link: link
        };
        return directive;

        function getTemplatePath(element, attrs) {
            return attrs.ecrudTemplate;
        }

        function link(scope, element, attrs) {
            scope.reload = reload;
	    scope.query = ecrudLocation.getQuery()

            function reload() {
		scope.query.page = 1;
		ecrudLocation.updateQuery(scope.query);
		scope.loadData();
            }
        }
    }
})();
