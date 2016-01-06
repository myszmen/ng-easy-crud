(function () {
    'use strict';

    angular
        .module('ng-easy-crud')
        .directive('ecrudDetail', ecrudDetail);
    
    ecrudDetail.$inject = ['Restangular'];

    function ecrudDetail(Restangular) {
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
                Restangular.one(getResourcePath(attrs)).get().then(function(data) {
                    scope.object = data;
                })
            }
            scope.loadData();
        }
    }
})();
