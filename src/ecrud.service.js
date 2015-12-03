(function () {
    'use strict';

    angular
        .module('ng-easy-crud')
        .service('ecrudService', ecrudService);
    
    ecrudService.$inject = ['$resource'];

    function ecrudService($resource) {
        return {
            resource: resource
        };

        function resource(endpoint) {
            return $resource(
                endpoint,
                null,
                {
                    'getList': {
                        method: 'GET',
                        params: {},
                        isArray: true
                    },
                    'getItem': {
                        method: 'GET',
                        params: {}
                    }
                }
            );
        }
    }
})();
