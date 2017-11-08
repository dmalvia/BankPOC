'use strict';

var collabModule = angular.module('bank_Webportal.home', [
        'ui.router',
    ])

    .config(['$stateProvider', function($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'home/home.html',
            controller: 'homeController as homeCtrl',
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



    .controller('homeController', ['$scope', '$http', function($scope, $http) {


    }])
