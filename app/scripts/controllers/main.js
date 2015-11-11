'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('MainCtrl', function ($scope, current, $sce) {

    $scope.nbaVideoResults = current.query();

    $scope.refreshCurrent = function() {
    	var myHtml = '<iframe ng-if="currentVid" width="560" height="315" src="https://www.youtube.com/embed/' + $scope.nbaVideoResults.items[0].id.videoId + '" frameborder="0" allowfullscreen></iframe>';
    	$scope.currentVid = $sce.trustAsHtml(myHtml);
    };

  });
