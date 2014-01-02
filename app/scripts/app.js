'use strict';

angular
    .module('plhApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'ngAnimate'
    ])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/partials/main.html',
                controller: 'MainCtrl'
            })
            .when('/podcasts', {
                templateUrl: 'views/partials/podcasts.html',
                controller: 'PodcastsCtrl'
            })
            .when('/podcastpage', {
                templateUrl: 'views/partials/podcastpage.html',
                controller: 'PodcastpageCtrl'
            })
            .when('/userpage', {
                templateUrl: 'views/partials/userpage.html',
                controller: 'UserpageCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

angular.module('plhApp').config([
    '$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);
