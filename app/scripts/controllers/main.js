'use strict';

/**
 * @ngdoc function
 * @name onsenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the onsenApp
 */
angular.module('onsenApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
