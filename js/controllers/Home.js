
app.controller('Home', function($scope, $log, AdsData, $routeParams, CategoriesData, TownsData, $cookies) {

	$scope.isLogged = $cookies.isLogged;
    $scope.username = $cookies.username;

    CategoriesData.get(function(data){
        $scope.categories = data;
    });

    TownsData.get(function(data){
        $scope.towns = data;
    });

    $scope.townId = undefined;
    $scope.categoryId = undefined;

    function allAds (page) {
        AdsData.getAllAds(page, $scope.categoryId, $scope.townId).$promise
            .then(function (data) {
                $scope.ads = data.ads;

                $scope.maxSize = 10;
                $scope.totalItems = data.numPages * $scope.maxSize;
                $scope.currentPage = page;

                $scope.setPage = function (pageNo) {
                    $scope.currentPage = pageNo;
                };

                $scope.pageChanged = function() {
                    allAds($scope.currentPage);
                };

                window.scrollTo(0, 0);

            }, function (error) {
                $log.error(error);
            });
    }

    $scope.changeCategoryId = function(categoryId) {
        $scope.categoryId = categoryId;
        allAds(1);
    };
    $scope.changeTownId = function(townId) {
        $scope.townId = townId;
        allAds(1);
    };

    allAds($routeParams.StartPage);

});