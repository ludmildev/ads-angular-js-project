app.factory('session', function () {

	function saveUserData (data) {
        localStorage.setItem('user', angular.toJson(data));
    }

    function getUserData () {
        return angular.fromJson(localStorage.getItem('user'));
    }

    function isLogged () {
    	var user = localStorage.getItem('user');

    	if (user)
    		return true;
    	else
    		return false;
    }

    function getUserName () {
    	if (isLogged())
    		return getUserData().username;
    }

    function getAccessToken () {
        if (isLogged())
            return getUserData().access_token;
    }

    function getHeaders () {
        if (isLogged())
            return 'Bearer ' + getAccessToken();
    }

    function logout() {
    	localStorage.clear();
    }

    return {
        saveUserData : saveUserData,
        getUserData : getUserData,
        isLogged : isLogged,
        getUserName : getUserName,
        getHeaders : getHeaders,
        logout : logout
    }
});