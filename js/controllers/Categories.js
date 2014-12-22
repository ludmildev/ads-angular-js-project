/**
 * Created by ludmil on 21.12.2014 г..
 */

app.controller('Categories', function($scope, CategoriesData) {
	$scope.name = 'Categori view';

	CategoriesData.get(function(data){
		$scope.categories = data;
	});
});