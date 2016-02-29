(function () {
    'use strict';

    angular
        .module('ng-easy-crud')
        .directive('ecrudPagination', ecrudPagination);
    
    ecrudPagination.$inject = ['$location'];

    function ecrudPagination($location) {
        var directive = {
            restrict: 'E',
            transclude: true,
            //scope: {},
            templateUrl: getTemplatePath,
            link: link
        };
        return directive;

        function getTemplatePath(element, attrs) {
            return attrs.ecrudTemplate;
        }

        function link(scope, element, attrs) {
            scope.updateQuery = updateQuery;
            scope.nextPage = nextPage;
            scope.prevPage = prevPage;
            // set 1 if page is undefined
	        scope.page = parseInt($location.search().page) || 1;

            function updateQuery() {
                if(scope.page == "undefined" || scope.page == 1) {
	                $location.search('page', null);
                } else {
	                $location.search('page', scope.page);
                }
            }

            function nextPage() {
                scope.page += 1;
                scope.updateQuery();
            }

            function prevPage() {
                scope.page -= 1;
                scope.updateQuery();
            }
        }
    }
})();
