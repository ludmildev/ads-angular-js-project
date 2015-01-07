app.factory('session', function () {

    return {
        saveUserData : function (data) {
            localStorage.setItem('user', angular.toJson(data));
        },
        getUserData : function () {
            return angular.fromJson(localStorage.getItem('user'));
        }
    }
});