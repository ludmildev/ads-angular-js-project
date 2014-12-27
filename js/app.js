
var app = angular.module('adsApp', ['ngResource', 'ngRoute'])
	.config(function ($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'templates/home.html',
            controller: 'Home'
		});
        $routeProvider.otherwise({
            'redirectTo' : '/'
        });
	});

//angular.element(document.getElementsByClassName('ng-view')).scope().name