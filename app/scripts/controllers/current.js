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



    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    $('.btn-primary').on('click', function() {
      $('.team-name').addClass('animated bounceIn');
      $('.channel-saved-alert').addClass('animated flash').one(animationEnd, 
        function() {
          $(this).removeClass('animated flash');
        });
    });

    $scope.saveChannel = function() {
    	var doesExist = false;

    	if (!$localStorage.savedChannels) {
    		$localStorage.savedChannels = [];
    	} else {
    		for ( var i=0; i < $localStorage.savedChannels.length; i++) {
	    		if ( $localStorage.savedChannels[i] === $scope.chanName ) {
	    			doesExist = true;
            $scope.channelSaved = {'duplicate': true};
	    		}
	    	}
      }
    	if (!doesExist) {
    		$localStorage.savedChannels.push($scope.chanName);
        $scope.channelSaved = {'success': true};
    	}
   };
});
  



