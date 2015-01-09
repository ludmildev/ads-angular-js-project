
app.controller('Home', function($scope, $log, $routeParams, categoriesData, townsData, adsData) {

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

    $scope.townId = undefined;
    $scope.categoryId = undefined;
    $scope.loader = true;
    $scope.noAdsFound = false;

    function allAds (page) {
        adsData.getAllAds(page, $scope.categoryId, $scope.townId)
            .$promise
            .then(function (data) {
                $scope.ads = data.ads;

                $scope.loader = false;

                if (data.numItems == 0)
                    $scope.noAdsFound = true;
                else
                    $scope.noAdsFound = false;

                //$scope.maxSize = 10;
                $scope.totalItems = data.numItems;//data.numPages * $scope.maxSize;
                $scope.currentPage = page;

                $scope.setPage = function (pageNo) {
                    $scope.currentPage = pageNo;
                };

                $scope.pageChanged = function(pageNo) {
                    allAds(pageNo);
                    window.scrollTo(0, 0);
                    $scope.loader = true;
                };

                window.scrollTo(0, 0);

            }, function (error) {
                $log.error(error);
            });
    }

    $scope.changeCategoryId = function(categoryId) {
        $scope.categoryId = categoryId;
        $scope.loader = true;
        window.scrollTo(0, 0);
        allAds(1);
    };
    $scope.changeTownId = function(townId) {
        $scope.townId = townId;
        $scope.loader = true;
        window.scrollTo(0, 0);
        allAds(1);
    };

    allAds($routeParams.StartPage);

});