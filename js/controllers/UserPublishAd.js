
app.controller('UserPublishAd', function($scope, $location, adsData, session, categoriesData, townsData) {

    $scope.imageData = '';
    $scope.adData = {
        townId: 0,
        categoryId: 0
    };

	categoriesData.getCategories()
        .$promise
        .then(function(data){
            $scope.categories = data;
        });
    townsData.getTowns()
        .$promise
        .then(function(data){
            $scope.towns = data;
        });
    
    $scope.fileSelected = function(inputData) {
        delete $scope.adData.ImageDataURL;
        var file = inputData.files[0];

        if (file.type.match(/image\/.*/)) {
            var image = new FileReader();

            image.onload = function() {
                $scope.adData.ImageDataURL = image.result;
                $('.ad-image').attr('src', image.result);
            };

            image.readAsDataURL(file);

        } else {
            $scope.adData.ImageDataURL = null;
            $('.ad-image').attr('src', 'images/no_img.png');
        }
    };

    $scope.publishAd = function (adData, adForm) {
		if (adForm.$valid && session.isLogged()) {
			adsData.publishAd(adData)
				.$promise
				.then(function () {
					$location.path('/user/ads');
				}, function (error) {
					console.log(error);
				});
		}
    };

});