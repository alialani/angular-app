'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('favorite_channelsCtrl', function ($scope, $localStorage) {
 	$scope.favchannels = $localStorage.savedChannels;
  });
