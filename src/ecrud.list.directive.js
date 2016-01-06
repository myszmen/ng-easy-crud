(function () {
    'use strict';

    angular
        .module('ng-easy-crud')
        .directive('ecrudList', ecrudList);
    
    ecrudList.$inject = ['Restangular'];

    function ecrudList(Restangular) {
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

        function getResourcePath(attrs) {
            return attrs.ecrudResource;
        }

        function link(scope, element, attrs) {
            scope.loadData = loadData;

            function loadData() {
                // loading = true for the use in template (eg show/hide sth)
                scope.loading = true;
		
            }
        }
    }
})();
