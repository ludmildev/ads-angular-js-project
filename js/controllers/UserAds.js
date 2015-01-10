
app.controller('UserAds', function($scope, adsData, session, categoriesData, townsData) {

    $scope.noAdsFound = false;
    $scope.loader = true;
    var adsProps = {
        status: null,
        page: 1
    };

	categoriesData.getCategories()
        .$promise
        .then(function (data){
            $scope.categories = data;
        });
    townsData.getTowns()
        .$promise
        .then(function (data){
            $scope.towns = data;
        });

    function getUserAds() {
        adsData.getUserAds(adsProps)
        .$promise
        .then(function (data){
            $scope.ads = data.ads;

            if (data.numItems == 0)
                $scope.noAdsFound = true;
            else
                $scope.noAdsFound = false;

            $scope.loader = false;

        });
    }
    
    getUserAds();

});