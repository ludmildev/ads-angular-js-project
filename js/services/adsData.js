app.factory('adsData', function ($resource, baseUrl, session) {
    var resource = $resource(
        baseUrl + 'Ads/', {},
        {
            'update' : {method : 'PUT'}
        }
    );

	function getAll(page, categoryId, townId) {
		return resource.get({
            PageSize : 10,
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
      PageSize : 10,
      StartPage: data.page,
      status : data.status
    });
  }

  function markAd(adId, status) {
    var resource = $resource(
        baseUrl + 'user/ads/'+status+'/'+adId, {},
        {
            update : {
              method: 'PUT', 
              headers : {
                'Authorization' : session.getHeaders()
              }
            }
        }
    );

    return resource.update();
  }

  function getAdById (adId) {
    var resource = $resource(
        baseUrl + 'user/ads/'+adId, {},
        {
            get : {
              method: 'GET', 
              headers : {
                'Authorization' : session.getHeaders()
              }
            }
        }
    );

    return resource.get();
  }

  function deleteAd (adId) {
    var resource = $resource(
          baseUrl + 'user/Ads/'+adId, {},
          {
              delete : {
                method: 'DELETE', 
                headers : {
                  'Authorization' : session.getHeaders()
                }
              }
          }
      );

      return resource.delete();
  }

	return {
		getAllAds: getAll,
    publishAd : publishAd,
    getUserAds : getUserAds,
    markAd : markAd,
    getAdById: getAdById,
    deleteAd : deleteAd
	};
})