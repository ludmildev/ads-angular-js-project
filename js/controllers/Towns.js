
app.controller('Towns', function($scope, TownsData) {

	TownsData.get(function(data){
		$scope.towns = data;
	});
});