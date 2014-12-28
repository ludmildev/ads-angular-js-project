
app.controller('Login', function($scope, $http, $log, $location, session) {

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
            session.set('token', data.access_token);
            session.set('token_type', data.token_type);
            session.set('username', data.username);
            session.set('isAdmin', data.isAdmin);
            session.set('isLogged', true);

            $location.path('#/');
        })
        .error(function (data, status, headers, config) {
            $scope.loginError = data.error_description;
            session.set('isLogged', false);
        });
    }

    $scope.login = function (loginData) {
        login(loginData);
    };

    $scope.logout = function () {
        session.remove('token');
        session.remove('token_type');
        session.remove('username');
        session.remove('isAdmin');
        session.set('isLogged', false);
    }

});