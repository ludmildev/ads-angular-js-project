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
        $routeProvider.when('/logout', {
            templateUrl: 'templates/login.html',
            controller: 'Login'
        });
        $routeProvider.otherwise({
            'redirectTo' : '/'
        });
    });

//http://localhost:1337/api/
app.constant('baseUrl', 'http://softuni-ads.azurewebsites.net/api/');

app.run(function ($rootScope, $cookies, session, $location) {
    $rootScope.isLogged = $cookies.isLogged;
    $rootScope.username = $cookies.username;
    $rootScope.token = $cookies.token;
    $rootScope.logout = function () {
        session.logout();
        $location.path('#/');
    }
});

//angular.element(document.getElementsByClassName('ng-view')).scope().name