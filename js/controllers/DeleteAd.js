
app.controller('DeleteAd', function($scope, $routeParams, $location, adsData, session) {

    $scope.loader = true;

    adsData.getAdById($routeParams.id)
        .$promise
        .then(function (data) {
            $scope.ad = data;
            $scope.loader = false;
        });

    $scope.deleteFn = function (adId) {
        $scope.loader = true;
        adsData.deleteAd(adId)
            .$promise
            .then(function () {
                $scope.loader = false;
                $location.path('/user/ads/');
            });
    }

});