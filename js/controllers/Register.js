
app.controller('Register', function($scope, townsData) {

    $scope.registerError = '';

    townsData.getTowns()
        .$promise
        .then(function(data){
            $scope.towns = data;
        });
});