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

                $scope.update_route = function (obj) {
                    localStorage.setItem('ticketupdate', JSON.stringify(obj))
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

                $scope.back = function () {
                    $location.path('/');
                }

                $scope.updateTickets = function () {
                    let state_data = localStorage.getItem('ticketupdate');
                    let user_data = localStorage.getItem('currentUser');
                    let parsedSateUser = JSON.parse(user_data)
                    let parsedSate = JSON.parse(state_data)
                    // $location.path('/');http://localhost:3000/tickets/63224c60c9b3a51411619901
                    let udata = {
                        id: parsedSate.id,
                        title: $scope.title,
                        description: $scope.description,
                        impersonate: parsedSate.impersonate,
                        created_by: parsedSate.created_by,
                        act_as: parsedSate.act_as,
                        naration: `Updated by ${parsedSateUser.user.first_name.toUpperCase() } ${parsedSateUser.user.last_name.toUpperCase() } `
                    }
                    $http(
                        {
                            method: 'PUT',
                            url: `http://localhost:3000/tickets/${parsedSate.id}`,
                            data: udata
                        }).then(function successCallback(response) {
                        console.log(response.data);
                        // this callback will be called asynchronously
                        // when the response is available
                        // $rootScope.tickets = response.data;

                    });
                }


            }]);