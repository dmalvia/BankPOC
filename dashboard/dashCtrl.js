'use strict';

var dashboardModule = angular.module('bank_Webportal.dashboard', [
        'ui.router',
    ])

    .config(['$stateProvider', function($stateProvider) {
        $stateProvider.state('dashboard', {
            url: '/dashboard',
            templateUrl: 'dashboard/dashboard.html',
            controller: 'dashboardController as dashCtrl',
        });
        $stateProvider
            .state('dashboard.product', {
                url: '/product',
                templateUrl: 'dashboard/templates/product.html',
                controller: 'dashboardController as dashCtrl',
            })
            .state('dashboard.atm', {
                url: '/atm',
                templateUrl: 'dashboard/templates/atm.html',
                controller: 'dashboardController as dashCtrl',
            })
            .state('dashboard.branch', {
                url: '/branch',
                templateUrl: 'dashboard/templates/branch.html',
                controller: 'dashboardController as dashCtrl',
            })
            .state('dashboard.label', {
                url: '/label',
                templateUrl: 'dashboard/templates/branch.html',
                controller: 'dashboardController as dashCtrl',
            });

    }])

    .controller('dashboardController', ['$scope', '$stateParams', function($scope, $stateParams) {
        var dashCtrl = this;
        /*Write business logic here*/
        console.log('StateParam' + $stateParams.type);
        dashCtrl.dispProp = {
            product: true,
            atm: false,
            branch: false,
            label: false
        }
        dashCtrl.config = {
            "baseURI": "https://bank-data.herokuapp.com/bankapi/"
        }
        dashCtrl.serviceTypes = [{ id: "product", type: "Products", class: "prod box", icon: "gift" }, { id: "atm", type: "ATM's", class: "atm box", icon: "map-marker" }, { id: "branch", type: "Branches", class: "branch box", icon: "edit" }, { id: "label", type: "Labels", class: "labelbx box", icon: "stats" }];
        dashCtrl.init = function() {
            dashCtrl.display = true;
            dashCtrl.appCredentials = {
                username: 'admin || Admin',
                password: 'admin'
            };
            dashCtrl.activeMenu = dashCtrl.serviceTypes[0].type;
            dashCtrl.fetchServiceData($stateParams.type);
        }

        dashCtrl.setActive = function(menuItem) {
            dashCtrl.activeMenu = menuItem
        }

        dashCtrl.login = function() {
            if (dashCtrl.uName == dashCtrl.appCredentials.username && dashCtrl.uPass == dashCtrl.appCredentials.password) {
                $state.go('dashboard', { 'type': 'branches', });
            } else {
                console.log("Invalid Credentials");
            }
        }

        dashCtrl.fetchServiceData = function(type) {
            dashCtrl.dispProp = {};
            dashCtrl.dispProp[type] = true;
            fetch(dashCtrl.config.baseURI + "services/" + type, {
                    header: {}
                })
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    dashCtrl.data = data.data;
                    console.log(dashCtrl.data);
                    $scope.$apply();
                })
        }

        dashCtrl.init();

    }])