
app.controller('Register', function($scope, townsData, userData, $location) {

    $scope.registerError = '';

    townsData.getTowns()
        .$promise
        .then(function(data){
            $scope.towns = data;
        });

    $scope.register = function (formData, form) {
		if (form.$valid) {
			userData.register(formData, function () {
	            $location.path('#/');
	        }, function (error) {
	            $scope.registerError = error.data.modelState[''][0];
	        });
		}
    }
});