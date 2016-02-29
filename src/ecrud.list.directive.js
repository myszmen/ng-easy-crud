(function () {
    'use strict';

    angular
        .module('ng-easy-crud')
        .directive('ecrudList', ecrudList);
    
    ecrudList.$inject = ['Restangular', '$location'];

    function ecrudList(Restangular, $location) {
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

	    // for future use
	    function getPrefix(attrs) {
	        if (attrs.hasOwnProperty('ecrudPrefix')) {
                return attrs.ecrudPrefix;
	        } else {
                return ''
            }
	    }

        function link(scope, element, attrs) {
            scope.loadData = loadData;

            scope.$on('$locationChangeSuccess', function(event){
                loadData();
            });

            function loadData() {
                // loading = true for the use in template (eg show/hide sth)
		        var query = $location.search();
                scope.loading = true;
                Restangular.all(getResourcePath(attrs)).getList(query).then(function(data) {
                    scope.object_list = data;
                    console.log('list:');
                    console.log(scope.object_list);
                })
		        scope.loading = false;
            }
            scope.loadData();
        }
    }
})();
