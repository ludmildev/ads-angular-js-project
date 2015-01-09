
app.controller('UserPublishAd', function($scope, $location, adsData, session, categoriesData, townsData) {

$scope.imageData = '';
$scope.newAdData = {
            townId: null,
            categoryId: null
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
        delete $scope.newAdData.imageData;
        var file = inputData.files[0];

        if (file.type.match(/image\/.*/)) {
            var reader = new FileReader();

            reader.onload = function() {
                $scope.newAdData.imageData = reader.result;
                $('.ad-image').attr('src', reader.result);
            };

            reader.readAsDataURL(file);

        } else {
            $scope.newAdData.imageData = null;
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