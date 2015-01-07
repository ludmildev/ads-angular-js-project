app.factory('categoriesData', function ($resource, baseUrl) {

	var resource = $resource(baseUrl+'Categories');

	function getCategories () {
		return resource.query();
	}

	return {
		getCategories: getCategories
	}
})