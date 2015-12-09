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
    $scope.teamLogo = $localStorage.teamLogo;
    $scope.trustThisLink = function(link) {
      return $sce.trustAsResourceUrl(link);
    };



    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    $('.btn-primary').on('click', function() {
      $('.text-success').hide();
      $('.team-name').addClass('animated bounceIn');
      $('.channel-saved-alert').addClass('animated flash').one(animationEnd, 
        function() {
          $(this).removeClass('animated flash');
        });
      // $('.channel-saved-alert').addClass('animated flash');
    });

    $scope.saveChannel = function() {
      var doesExist = false;

      if (!$localStorage.savedChannels) {
        $localStorage.savedChannels = [];
      } else {
        for ( var i=0; i < $localStorage.savedChannels.length; i++) {
          if ( $localStorage.savedChannels[i].NAME === $scope.chanName ) {
            doesExist = true;
            $scope.channelSaved = {'duplicate': true};
          }
        }
      }
      if (!doesExist) {
        var couplet = {"NAME": $scope.chanName, "LOGO": $scope.teamLogo};
        $localStorage.savedChannels.push(couplet);
        $scope.channelSaved = {'success': true};
      }

      // console.log("Click");

      // angular.element('.team-name').addClass('animated bounceIn');
      // // $('.channel-saved-alert').(addClass'animated flash').one(animationEnd, 
      // //   function() {
      // //     $(this).removeClass('animated flash');
      // //   });
      // angular.element('.channel-saved-alert').addClass('animated flash');
   };
});
  



