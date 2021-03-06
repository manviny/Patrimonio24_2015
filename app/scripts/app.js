'use strict';

/**
 * @ngdoc overview
 * @name onsenApp
 * @description
 * # onsenApp
 *
 * Main module of the application.
 */
angular
  .module('onsenApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'onsen',
    'leaflet-directive'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/lcoaliza', {
        templateUrl: 'views/localiza.html',
        controller: 'LocalizaCtrl'
      })
      .when('/lugaresdeinteres', {
        templateUrl: 'views/lugaresdeinteres.html',
        controller: 'LugaresdeinteresCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
