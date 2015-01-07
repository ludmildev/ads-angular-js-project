
app.controller('Login', function($scope, $log, $location, userData, baseUrl) {

    $scope.loginError = '';
    /*
    $scope.loginData = {
        username: '',
        password: ''
    };
    */

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