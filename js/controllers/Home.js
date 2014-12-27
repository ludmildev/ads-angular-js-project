/**
 * Created by ludmil on 21.12.2014 г..
 */

app.controller('Home', function($scope, $log, AdsData) {
	$scope.name = "Home";
	$scope.isLogged = false;

    AdsData.getAllAds(function(resp){
        $scope.ads = resp.ads;
    });
});