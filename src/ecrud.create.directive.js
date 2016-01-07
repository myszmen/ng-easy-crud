(function () {
    'use strict';

    angular
        .module('ng-easy-crud')
        .directive('ecrudCreate', ecrudCreate);
    
    ecrudCreate.$inject = ['Restangular'];

    function ecrudCreate(Restangular) {
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
            scope.postData = postData;

            function postData(object) {
                // loading = true for the use in template (eg show/hide sth)
                scope.loading = true;
                console.log(object);
                Restangular.all(getResourcePath(attrs)).post(object).then(function(data) {
                    console.log('wyslalem');
                    console.log(data);
                    //scope.object = data;
                }, function(response) {
                    console.log("Error with status code", response.status);
                    console.log(response);
                })
            }
        }
    }
})();
