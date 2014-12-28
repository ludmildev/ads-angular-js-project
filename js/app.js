
var app = angular.module('adsApp', ['ngResource', 'ngRoute', 'ui.bootstrap'])
	.config(function ($routeProvider) {
        $routeProvider.when('/ads', {
            templateUrl: 'templates/home.html',
            controller: 'Home'
        });
        $routeProvider.when('/ads/page/:StartPage', {
            templateUrl: 'templates/home.html',
            controller: 'Home'
        });
        $routeProvider.otherwise({
            'redirectTo' : '/ads'
        });
    });

//angular.element(document.getElementsByClassName('ng-view')).scope().name