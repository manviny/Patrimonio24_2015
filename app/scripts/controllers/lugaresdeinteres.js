'use strict';

/**
 * @ngdoc function
 * @name onsenApp.controller:LugaresdeinteresCtrl
 * @description
 * # LugaresdeinteresCtrl
 * Controller of the onsenApp
 */
angular.module('onsenApp')
  .controller('LugaresdeinteresCtrl', function ($scope, $http) {
alert("hh")

	$http.get( 'https://s3-eu-west-1.amazonaws.com/patrimonio24/municipios/assets/files/1315/data.json' )
	.then(function (response) {
		console.log('datos', response)
		       
	})


  });
