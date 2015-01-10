
app.controller('EditUserProfile', function($scope, $routeParams, userData, townsData) {

    $scope.loader = true;
    $scope.editMessage = '';

    townsData.getTowns()
        .$promise
        .then(function(data){
            $scope.towns = data;
        });

    userData.getUserData()
        .$promise
        .then(function (data) {
            $scope.loader = false;
            $scope.user = {
                name : data.name,
                email : data.email,
                phoneNumber : data.phoneNumber,
                townId : data.townId
            };
        });

    $scope.updateProfile = function (data) {
        userData.updateUserData(data)
            .$promise
            .then(function (data){
                $scope.editMessage = data.message;
            });
    };

});