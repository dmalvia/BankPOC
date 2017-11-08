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

        if ('serviceWorker' in navigator) {
            if (navigator.serviceWorker.controller) {
                console.log('active service-worker found, deferring registration')
            } else {

                navigator.serviceWorker.register('sw.js', { scope: './' }).then(function(reg) {
                    console.log('Service worker has been registered for scope:' + reg.scope);
                });
            }
        }
    }])


    .controller('rootController', ['$rootScope', '$http', '$state', function($rootScope, $http, $state) {

        var rootCtrl = this;


    }]);