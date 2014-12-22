app.factory('CategoriesData', function ($http) {
	function getAll(success, error) {
		$http({
			method: 'GET',
			url: 'http://softuni-ads.azurewebsites.net/api/Categories'
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
	}
})