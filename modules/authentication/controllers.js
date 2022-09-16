'use strict';
 
angular.module('Authentication', [])
 
.controller('LoginController',
    ['$scope', '$rootScope', '$location', '$http',
    function ($scope, $rootScope, $location, $http) {
        // reset login status
        // AuthenticationService.ClearCredentials();

        $scope.reg = function () {
            console.log('registration')
            $location.path('/reg');
        }

        $scope.login = function () {
            console.log($scope.username);
            console.log($scope.password);
            $scope.dataLoading = true;
            const url = 'http://localhost:3000/signin', data = {
                email: $scope.username,
                password: $scope.password
            }, config = 'Content-Type: application/json ';

            // $http.post(url, data, config)
            $http({
                url: url,
                method: "POST",
                data: {
                    email: $scope.username,
                    password: $scope.password
                }
            }).then(function (response) {
                // This function handles success
                console.log(response.data);
                localStorage.setItem("currentUser", JSON.stringify(response.data));
                $scope.dataLoading = false;
                $location.path('/');
                // $http.get('/')
            }, function (error) {
                // this function handles error
                console.log(error);
                $scope.error = 'Access Denied';
                $scope.dataLoading = false;
            });
        };
    }]);