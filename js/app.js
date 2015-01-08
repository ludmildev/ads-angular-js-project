var app = angular.module('adsApp', ['ngResource', 'ngRoute', 'ui.bootstrap'])
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
        $routeProvider.when('/register', {
            templateUrl: 'templates/register.html',
            controller: 'Register'
        });
        $routeProvider.otherwise({
            'redirectTo' : '/'
        });
    });

//http://localhost:1337/api/
app.constant('baseUrl', 'http://softuni-ads.azurewebsites.net/api/');