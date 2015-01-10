var app = angular.module('adsApp', ['ngResource', 'ngRoute', 'ui.bootstrap'])
	.config(function ($routeProvider) {
        $routeProvider.when('/home', {
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
        $routeProvider.when('/user/ads/publish', {
            templateUrl: 'templates/user-publish-ad.html',
            controller: 'UserPublishAd'
        });
        $routeProvider.when('/user/ads', {
            templateUrl: 'templates/user-ads.html',
            controller: 'UserAds'
        });
        $routeProvider.when('/user/ads/delete/:id', {
            templateUrl: 'templates/delete-ad.html',
            controller: 'DeleteAd'
        });
        $routeProvider.when('/user/profile', {
            templateUrl: 'templates/edit-user-profile.html',
            controller: 'EditUserProfile'
        });
        $routeProvider.otherwise({
            'redirectTo' : '/home'
        });
    });

//http://localhost:1337/api/
//http://softuni-ads.azurewebsites.net/api/
app.constant('baseUrl', 'http://softuni-ads.azurewebsites.net/api/');