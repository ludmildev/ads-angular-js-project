/**
 * Created by ludmil on 21.12.2014 г..
 */

app.controller('Ads', function($scope, AdsData) {

	AdsData.get(function(data){
		$scope.ads = data.ads;
	});
});