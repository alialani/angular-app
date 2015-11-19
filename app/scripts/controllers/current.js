'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:CurrentCtrl
 * @description
 * # CurrentCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('CurrentCtrl', function ($scope, $routeParams, current, $localStorage, $sce) {
   	
  	$scope.videos = $localStorage.currentVid;
  	$scope.chanName = $localStorage.channelName;
  	$scope.trustThisLink = function(link) {
  		return $sce.trustAsResourceUrl(link);
  	};

    $scope.showRest = function() {
      $scope.trustAllLinks = function(link) {
        return $sce.trustAsResourceUrl(link);
      };
    };

    $scope.saveChannel = function() {
    	var doesExist = false;

    	if (!$localStorage.savedChannels) {
    		$localStorage.savedChannels = [];
    		$localStorage.savedChannels.push($scope.chanName);
    	} else {
    		for ( var i=0; i < $localStorage.savedChannels.length; i++) {
	    		if ( $localStorage.savedChannels[i] === $scope.chanName ) {
	    			console.log("Already there!");
	    			doesExist = true;
	    		}
	    		else {
	    			doesExist = false;
	    		}
	    	}

	    	if (!doesExist) {
	    		$localStorage.savedChannels.push($scope.chanName);
	    	}
    	}

    	
	  
   };
});
  




