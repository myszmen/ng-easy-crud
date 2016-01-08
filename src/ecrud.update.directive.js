(function () {
    'use strict';

    angular
        .module('ng-easy-crud')
        .directive('ecrudUpdate', ecrudUpdate);
    
    ecrudUpdate.$inject = ['$location', 'Restangular'];

    function ecrudUpdate($location, Restangular) {
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
            scope.postData = postData;
	    scope.cancel = cancel;

	    function loadData() {
		scope.loading = true;
		Restangular.one(getResourcePath(attrs)).get().then(function(data) {
	            scope.object = data;
		    console.log('obiekt do edycji:');
		    console.log(data);
		});
	    }
            function postData(object) {
                // loading = true for the use in template (eg show/hide sth)
                scope.loading = true;
                console.log(object);
                Restangular.all(getResourcePath(attrs)).patch(object).then(function(data) {
                    console.log('wyslalem');
                    console.log(data);
		    $location.url(attrs.successUrl);
                    //scope.object = data;
                }, function(response) {
                    console.log("Error with status code", response.status);
                    console.log(response);
                })
            }
	    function cancel() {
		$location.url(attrs.cancelUrl);
	    }
	    scope.loadData();
        }
    }
})();
