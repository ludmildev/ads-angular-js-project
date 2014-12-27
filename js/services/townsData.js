app.factory('TownsData', function ($http) {
	function getAll(success, error) {
		$http({
			method: 'GET',
			url: 'http://localhost:1337/api/Towns'
			// headers: {}
			// data: {}
		})
		.success(function (data, status, headers, config) {
			success(data);
		})
		.error(function (data, status, headers, config) {
			error(data, status, headers(), config);
		});
	}

	return {
		get: getAll,
	};
})