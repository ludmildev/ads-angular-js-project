
var app = angular.module('adsApp', ['ngResource', 'ngRoute', 'ui.bootstrap', 'ngCookies'])
	.config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'templates/home.html',
            controller: 'Home'
        });
        $routeProvider.when('/page/:StartPage', {
            templateUrl: 'templates/home.html',
            controller: 'Home'
        });
        $routeProvider.when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'Login'
        });
        $routeProvider.otherwise({
            'redirectTo' : '/'
        });
    });

//angular.element(document.getElementsByClassName('ng-view')).scope().name