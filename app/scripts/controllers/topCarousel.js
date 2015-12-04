'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:AllvideosCtrl
 * @description
 * # AllvideosCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('topCarouselCtrl', function ($scope, $localStorage, $window, videosearch) {
  	
    $scope.findChannelByImg = function(teamImg){
    	console.log(teamImg);
    	console.log($localStorage.teamsList[9].image);
    	for(var i = 0; i < $localStorage.teamsList.length; i++){
    		if (teamImg === $localStorage.teamsList[i].image){
	    		$scope.channelFound = videosearch.find({
		        	query: $localStorage.teamsList[i].id
		        });
		        $localStorage.currentVid = $scope.channelFound;
		        var fullName = $localStorage.teamsList[i].name1.concat(" " + $localStorage.teamsList[i].name2);
		        $localStorage.channelName = fullName.toUpperCase();
    			$localStorage.teamLogo = $localStorage.teamsList[i].image;
		        $window.location = "#/current";
	    	}
    	}
    };

  });
