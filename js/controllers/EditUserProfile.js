
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
    $scope.changePassword = function (data) {
        userData.changePassword(data)
            .$promise
            .then(function (data){
                $scope.editMessage = data.message;
            }, function (error) {

                if (error.data.modelState[''])
                    $scope.editMessage = error.data.modelState[''][0];
                else
                    $scope.editMessage = error.data.modelState['model.ConfirmPassword'][0];
            });
    };

});