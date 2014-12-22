/**
 * Created by ludmil on 21.12.2014 г..
 */

var app = angular.module('adsApp', ['ngResource', 'ngRoute'])
	.config(function ($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'Home'
		});
		$routeProvider.when('/ads', {
			templateUrl: 'templates/allAds.html',
			controller: 'AllAdsController'
		});
	});