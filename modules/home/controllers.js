'use strict';

angular.module('Home', [])

    .controller('HomeController',
        ['$scope', '$rootScope', '$location', '$http',
            function ($scope, $rootScope, $location, $http) {

                let currentUser = localStorage.getItem('currentUser');
                let currentUserParsed = JSON.parse(currentUser);
                $scope.fullname = `${currentUserParsed.user.first_name.toUpperCase()} ${currentUserParsed.user.last_name.toUpperCase()}`;

                $scope.logout = function () {
                    console.log('logout')
                    localStorage.clear();
                    $location.path('/login');
                }

                $scope.update_route = function () {
                    $location.path('/update/ticket');
                }

                $scope.fetchTickets = function () {
                    $http(
                        {
                            method: 'GET',
                            url: 'http://localhost:3000/tickets?'
                        }).then(function successCallback(response) {
                        // this callback will be called asynchronously
                        // when the response is available
                        $rootScope.tickets = response.data;
                        console.log(response.data);
                    });

                }


            }]);