'use strict';

/**
 * @ngdoc overview
 * @name angularAppApp
 * @description
 * # angularAppApp
 *
 * Main module of the application.
 */
angular
  .module('angularAppApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngStorage',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/current', {
        templateUrl: 'views/current.html',
        controller: 'CurrentCtrl',
        controllerAs: 'current'
      })
      .when('/allvideos/:channel', {
        templateUrl: 'views/allvideos.html',
        controller: 'AllvideosCtrl',
        controllerAs: 'allvideos'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
