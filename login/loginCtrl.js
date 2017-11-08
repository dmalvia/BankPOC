'use strict';

var collabModule = angular.module('bank_Webportal.login', [
        'ui.router',
    ])

    .config(['$stateProvider', function($stateProvider) {
        $stateProvider.state('login', {
            url: '/login',
            templateUrl: 'apps/collaboration/collab.html',
            controller: 'loginController as loginCtrl',
        });
    }])


    .directive('ngEnter', function() {
        return function(scope, element, attrs) {
            element.bind("keydown keypress", function(event) {
                if (event.which === 13) {
                    scope.$apply(function() {
                        scope.$eval(attrs.ngEnter);
                    });

                    event.preventDefault();
                }
            });
        };
    })



    .controller('loginController', ['$scope', '$http', function($scope, $http) {


    }])
