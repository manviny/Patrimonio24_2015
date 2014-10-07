'use strict';

/**
 * @ngdoc function
 * @name onsenApp.controller:LcoalizaCtrl
 * @description
 * # LcoalizaCtrl
 * Controller of the onsenApp
 */
angular.module('onsenApp')
  .controller('LocalizaCtrl', function ($scope, mapa) {

  	// initialize map
	mapa.setDefaultMap();


  	var array = [];
	// array.push({lat: 39.50300178969824, lng: -3.878173828125, focus: true, draggable: false});	
	// array.push({lat: 38.50300178969824, lng: -2.878173828125, focus: true, draggable: false});	

	mapa.pushMarkers(array); 
	mapa.myPosition();
	// mapa.fitMarkers(array); // not reloading map
  });
