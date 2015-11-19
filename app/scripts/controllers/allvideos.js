'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:AllvideosCtrl
 * @description
 * # AllvideosCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('AllvideosCtrl', function ($scope, $routeParams, current) {
    $scope.channel = $routeParams.channel;

    $scope.currentChannel = current.query({
        channel: $routeParams.channel
    });
  });
