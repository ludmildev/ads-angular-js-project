app.factory('userData', function ($resource, session, baseUrl) {

	function login(user, success, error) {
		$resource(baseUrl + 'user/login')
			.save(user)
			.$promise
			.then(function (data) {
				session.saveUserData(data);
				success(data);
			}, function (err){
				error(err);
			});
	}

	function register(user, success, error) {
		$resource(baseUrl + 'user/Register')
			.save(user)
			.$promise
			.then(function (data) {
				session.saveUserData(data);
				success(data);
			}, function (err){
				error(err);
			});
	}

	function getUserData () {
		return $resource(baseUrl + 'user/profile', {}, {
			get : {
                method: 'GET', 
                headers : {
                  'Authorization' : session.getHeaders()
                }
              }
			}).get();
	}

	function updateUserData (userData) {
		return $resource(baseUrl + 'user/profile', {}, {
			update : {
                method: 'PUT', 
                headers : {
                  'Authorization' : session.getHeaders()
                }
              }
			}).update(userData);
	}

	function changePassword (passData) {
		return $resource(baseUrl + 'user/changePassword', {}, 
			{
				update : {
	                method: 'PUT', 
	                headers : {
	                  'Authorization' : session.getHeaders()
	                }
              	}
			}).update(passData);	
	}

	return {
		login : login,
		register : register,
		getUserData : getUserData,
		updateUserData : updateUserData,
		changePassword : changePassword
	}
});