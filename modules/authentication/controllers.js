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

        $scope.back = function () {
            console.log('back')
            $location.path('/login');
        }

        $scope.login = function () {
            console.log($scope.username);
            console.log($scope.password);
            $scope.dataLoading = true;
            const url = 'http://localhost:3000/signin', data = {
                email: $scope.username,
                password: $scope.password
            }, config = 'Content-Type: application/json ';

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

        $scope.register = function () {
            let data ={
                first_name: $scope.firstname,
                last_name: $scope.lastname,
                email: $scope.username,
                password: $scope.password
            }

            $http({
                url: 'http://localhost:3000/users',
                method: "POST",
                data: data
            }).then(function (response) {
                // This function handles success
                console.log(response)
                if (response.status === 200) {
                    console.log(response.data);
                    $scope.dataLoading = false;
                    $location.path('/login');
                }else {
                    $scope.error = 'Error Occured while saving user data';
                }

            }, function (error) {
                // this function handles error
                console.log(error);
                $scope.error = 'Server Error ';
                $scope.dataLoading = false;
            });
        }
    }]);