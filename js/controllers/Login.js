
app.controller('Login', function($scope, $location, userData) {

    $scope.loginError = '';

    $scope.login = function (loginData) {
        userData.login(loginData, function () {
            $location.path('#/');
        }, function (error) {
            $scope.loginError = error.data.error_description;
        });
    };

});