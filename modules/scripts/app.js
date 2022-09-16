'use strict';

// declare modules
angular.module('Authentication', []);
angular.module('Home', []);

angular.module('BasicHttpAuthExample', [
    'Authentication',
    'Home',
    'ngRoute',
    'ngCookies'
])

.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/login', {
            controller: 'LoginController',
            templateUrl: '../authentication/views/login.html',
            hideMenus: true
        })

        .when('/reg', {
            controller: 'LoginController',
            templateUrl: '../authentication/views/reg.html',
            hideMenus: true
        })

        .when('/update/ticket', {
            controller: 'HomeController',
            templateUrl: '../home/views/updateTicket.html',
            hideMenus: false
        })

        .when('/', {
            controller: 'HomeController',
            templateUrl: '../home/views/home.html'
        })

        .otherwise({ redirectTo: '/login' });
}])

.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {

    }]);