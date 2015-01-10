app.factory('adsData', function ($resource, baseUrl, session) {
    var resource = $resource(
        baseUrl + 'Ads/', {},
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
    var resource = $resource(
        baseUrl + 'user/ads', {},
        {
            save : {
              method: 'POST', 
              headers : {
                'Authorization' : session.getHeaders()
              }
            }
        }
    );

    return resource.save({
      title: adData.title,
      text: adData.text,
      changeImage: true,
      ImageDataURL: adData.ImageDataURL,
      categoryId: adData.categoryId,
      townId: adData.townId
    });
  }

  function getUserAds(data) {
    var resource = $resource(
        baseUrl + 'user/ads', {},
        {
            get : {
              method: 'GET', 
              headers : {
                'Authorization' : session.getHeaders()
              }
            }
        }
    );

    return resource.get({
      PageSize : 15,
      StartPage: data.page,
      status : data.status
    });
  }

	return {
		getAllAds: getAll,
    publishAd : publishAd,
    getUserAds : getUserAds
	};
})