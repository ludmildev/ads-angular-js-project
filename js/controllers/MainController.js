
app.controller('MainController', function($scope, $location, session) {

    $scope.isLogged = function () {
        if (session.isLogged()) {
            $scope.username = session.getUserName();
            $scope.logout = function () {
                session.logout();
                $location.path('/');
            }
            return true;
        } else
            return false;
    }

});