'use strict';

/**
 * @ngdoc function
 * @name onsenApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the onsenApp
 */
angular.module('onsenApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
