
app.controller('Login', function($scope, $log, $location, userData) {

    $scope.loginError = '';

    $scope.login = function (loginData) {
        userData.login(loginData, function () {
            $location.path('#/');
        }, function (error) {
            $scope.loginError = error.error_description;
        });
    };

    $scope.logout = function () {

    }

});