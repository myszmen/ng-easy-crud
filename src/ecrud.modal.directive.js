(function () {
    'use strict';

    angular
        .module('ng-easy-crud')
        .directive('ecrudModal', ecrudModal);
    
    ecrudModal.$inject = ['$uibModal'];

    function ecrudModal($uibModal) {
        var directive = {
            restrict: 'A',
            //transclude: true,
            scope: {},
            //templateUrl: getTemplatePath,
            link: link
        };
        return directive;

        function link(scope, element, attrs) {
            element.bind('click', openModal);
        
            function openModal() {
                console.log('clicked!');
                scope.modalInstance = $uibModal.open({
                    templateUrl: getTemplatePath,
                    controller: modalCtrl
                })
            }

            function getTemplatePath() {
                console.log(attrs);
                console.log(attrs.ecrudTemplate);
                return attrs.ecrudTemplate;
            }

            function modalCtrl($scope, $uibModalInstance) {
                $scope.close = function() {
                    $uibModalInstalce.dismiss('cancel');
                };
            }
        }
    }
})();
