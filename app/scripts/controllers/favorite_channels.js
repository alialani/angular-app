'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('favorite_channelsCtrl', function ($scope, $localStorage, $route, videosearch, $window) {
 	$scope.favchannels = $localStorage.savedChannels;

 	$scope.removeChannel = function (chanName) {
 		for(var i=0; i<$scope.favchannels.length; i++) {
 			if(chanName === $scope.favchannels[i].NAME) {
 				delete $scope.favchannels[i];
 				delete $localStorage.savedChannels[i];
 				$scope.favchannels = $scope.favchannels.filter(Boolean);
 				$localStorage.savedChannels = $localStorage.savedChannels.filter(Boolean);
 				$route.reload();
 			}
 		}
 	};

 	$scope.goToChannel = function (chanName) {
 		for(var i=0; i<$localStorage.teamsList.length; i++) {
 			var name = $localStorage.teamsList[i].name1.concat(" " + $localStorage.teamsList[i].name2);
 			var fullName = name.toUpperCase();
 			if(chanName === fullName) {
	        	$localStorage.currentVid = videosearch.find({query: $localStorage.teamsList[i].id});
	        	$localStorage.channelName = fullName;		        
    			$localStorage.teamLogo = $localStorage.teamsList[i].image;
		        $window.location = "#/current";
 			}
 		}
 	};

  });

