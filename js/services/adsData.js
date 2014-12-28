app.factory('AdsData', function ($resource, $http) {
    var resource = $resource(
        'http://localhost:1337/api/Ads/?StartPage=:StartPage&CategoryId=:CategoryId',
        {
            StartPage: '@StartPage',
            CategoryId: '@CategoryId'
        }
    );

	function getAll(page, categoryId, townId) {
		return resource.get({
            StartPage: page,
            CategoryId: categoryId,
            TownId: townId
        });
	}

	return {
		getAllAds: getAll
	};
})