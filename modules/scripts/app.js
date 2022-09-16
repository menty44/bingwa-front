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
            // templateUrl: 'modules/authentication/views/login.html',
            templateUrl: '../authentication/views/login.html',
            hideMenus: true
        })

        .when('/reg', {
            controller: 'LoginController',
            // templateUrl: 'modules/authentication/views/login.html',
            templateUrl: '../authentication/views/reg.html',
            hideMenus: true
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