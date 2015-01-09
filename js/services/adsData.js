app.factory('adsData', function ($resource, baseUrl) {
    var resource = $resource(
        baseUrl + 'Ads/',
        null,
        {
            'update' : {method : 'PUT'}
        }
    );

	function getAll(page, categoryId, townId) {
		return resource.get({
            PageSize : 15,
            StartPage: page,
            CategoryId: categoryId,
            TownId: townId
        });
	}

    function publishAd (adData) {
        return resource.save({
          "title": adData.title,
          "text": adData.text,
          "changeImage": adData.changeImage,
          "imageDataURL": adData.imageDataURL,
          "categoryId": adData.categoryId,
          "townId": adData.townId
        });
    }

	return {
		getAllAds: getAll
	};
})