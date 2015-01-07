app.factory('adsData', function ($resource, baseUrl) {
    var resource = $resource(
        baseUrl + 'Ads/?StartPage=:StartPage&CategoryId=:CategoryId',
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