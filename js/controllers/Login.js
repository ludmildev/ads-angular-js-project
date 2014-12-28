
app.controller('Login', function($scope, $http, $log, $location, session) {
	$scope.name = "Home";

    $scope.loginError = '';
    $scope.loginData = {
        username: '',
        password: ''
    };

    function login (loginData) {
        $http({
            method: 'POST',
            url: 'http://localhost:1337/api/user/Login',
            // headers: {}
            data: {
                username: loginData.username,
                password: loginData.password
            }
        })
        .success(function (data, status, headers, config) {
                console.log(data);
            session.set('token', data.access_token);
            session.set('token_type', data.token_type);
            session.set('username', data.username);
            session.set('isAdmin', data.isAdmin);

            $location.path('#/');
        })
        .error(function (data, status, headers, config) {
            $scope.loginError = data.error_description;
        });
    }

    $scope.login = function (loginData) {
        login(loginData);
    };

});