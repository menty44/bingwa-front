'use strict';
 
angular.module('Home', [])
 
.controller('HomeController',
    ['$scope','$rootScope', '$location', '$http',
    function ($scope, $rootScope, $location, $http) {

    let currentUser = localStorage.getItem('currentUser');
    let currentUserParsed = JSON.parse(currentUser);
        $scope.fullname = `${currentUserParsed.user.first_name.toUpperCase()} ${currentUserParsed.user.last_name.toUpperCase()}`;

        $scope.logout = function () {
            console.log('logout')
            localStorage.clear();
            $location.path('/login');
        }

    }]);