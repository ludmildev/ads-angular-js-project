
app.controller('UserAds', function($scope, adsData, session, categoriesData, townsData) {

    $scope.noAdsFound = false;
    $scope.loader = true;
    $scope.adsProps = {
        status: null,
        page: 1
    };

    function getUserAds(page) {
        adsData.getUserAds($scope.adsProps)
        .$promise
        .then(function (data){
            $scope.ads = data.ads;

            if (data.numItems == 0)
                $scope.noAdsFound = true;
            else
                $scope.noAdsFound = false;

            $scope.loader = false;

            $scope.totalItems = data.numItems;
            $scope.totalPages = data.numPages;
            $scope.adsProps.page = page;

            $scope.setPage = function (pageNo) {
                $scope.adsProps.page = pageNo;
            };

            $scope.pageChanged = function(pageNo) {
                getUserAds(pageNo);
                window.scrollTo(0, 0);
                $scope.loader = true;
            };

        });
    }

    $scope.changeStatus = function (status) {
        $scope.adsProps.status = status;
        getUserAds(1);
    }

    $scope.markAd = function (adId, status) {
        adsData.markAd(adId, status).$promise.then(function(){
            getUserAds($scope.adsProps.page);
        });
    }

    getUserAds();

});