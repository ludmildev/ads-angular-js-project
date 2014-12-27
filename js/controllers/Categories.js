
app.controller('Categories', function($scope, CategoriesData) {

	CategoriesData.get(function(data){
		$scope.categories = data;
	});
});