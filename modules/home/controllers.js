'use strict';
 
angular.module('Home', [])
 
.controller('HomeController',
    ['$scope','$rootScope', '$location', '$http',
    function ($scope, $rootScope, $location, $http) {

        $scope.logout = function () {
            console.log('logout')
            localStorage.clear();
            $location.path('/login');
        }

    }]);