'use strict';

// Declare app level module which depends on views, and components
var bank_Webportal = angular.module('bank_Webportal', [
    'ui.router',
    'bank_Webportal.home',
    'bank_Webportal.login',
    'bank_Webportal.dashboard'
]).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
         $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'home/home.html',
            controller: 'homeController as homeCtrl',
        });
    }])


    .controller('rootController', ['$rootScope', '$http', '$state',  function($rootScope, $http, $state) {

        var rootCtrl = this;


    }]);