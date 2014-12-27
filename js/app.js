
var app = angular.module('adsApp', ['ngResource', 'ngRoute'])
	.config(function ($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'templates/home.html'
		});
        $routeProvider.otherwise({'redirectTo' : '/'});
	});