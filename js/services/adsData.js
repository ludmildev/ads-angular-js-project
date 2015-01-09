app.factory('adsData', function ($resource, baseUrl) {
    var resource = $resource(
        baseUrl + 'Ads/'//,
        //{
        //    StartPage: '@StartPage',
        //    CategoryId: '@CategoryId',
        //    TownId : '@TownId'
        //}
    );

	function getAll(page, categoryId, townId) {
		return resource.get({
            PageSize : 15,
            StartPage: page,
            CategoryId: categoryId,
            TownId: townId
        });
	}

	return {
		getAllAds: getAll
	};
})