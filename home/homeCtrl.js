'use strict';

var homeModule = angular.module('bank_Webportal.home', [
        'ui.router',
    ])

    .config(['$stateProvider', function($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'home/home.html',
            controller: 'homeController as homeCtrl',
        });
    }])

    .controller('homeController', ['$scope', function($scope) {
        /*Write business logic here*/

    }])
