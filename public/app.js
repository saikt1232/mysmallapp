var app = angular.module('contactListApp', []);


app.controller('contactsController', function ($scope, $http) {


    var dataRefresh = function () {
        $http.get('/contactsList').success(function (response) {
            $scope.contactList = response;
        });

        $scope.contact = {};
    }


    $scope.saveContact = function (contact) {
        console.log(contact);
        $http.post('/contactsList', $scope.contact).success(function (response) {

            dataRefresh();

        });
    }


    $scope.deleteContact = function (id) {

        $http.delete('/contactsList' + id).success(function (success) {

            dataRefresh();
        });
    }

    dataRefresh();


});

