/**
 * Created by ludmil on 21.12.2014 г..
 */

app.controller('Towns', function($scope, TownsData) {

	TownsData.get(function(data){
		$scope.towns = data;
	});
});