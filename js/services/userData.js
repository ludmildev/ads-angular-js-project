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

	return {
		login : login
	}
});