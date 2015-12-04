'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('MainCtrl', function ($scope, current, videosearch, $sce, $localStorage, $window) {
    $scope.channelFound = videosearch.find();
    $scope.findChannel = function(){
    	  	var channelNameIdList = [
    	  		{"name1": "miami", "name2": "heat", "id":"UC8bZbiKoPNRi3taABIaFeBw", "image": "images/heat.png"},
    	  		{"name1": "boston", "name2": "celtics", "id": "UCMfT9dr6xC_RIWoA9hI0meQ", "image": "images/celts.png"},
    	  		{"name1": "denver", "name2": "nuggets", "id": "UCl8hzdP5wVlhuzNG3WCJa1w", "image": "images/denv.png"},		
    	  		{"name1": "los angeles", "name2": "clippers", "id": "UCoK6pw3iIVF9WAWnQd3hj-g", "image": "images/clips.png"},
    	  		{"name1": "brooklyn", "name2": "nets", "id": "UCTenKHt0h3VjdMvRWP6Lbvw", "image": "images/nets.png"},
    	  		{"name1": "dallas", "name2": "mavericks", "id": "UCZywaCS_y9YOSSAC9z3dIeg", "image": "images/mavs.png"},
    	  		{"name1": "houston", "name2": "rockets", "id": "UC8SNI91tgp9O93EyCU579nQ", "image": "images/rocks.png"},
    	  		{"name1": "new york", "name2": "knicks", "id": "UC0hb8f0OXHEzDrJDUq-YVVw", "image": "images/knicks.png"},
    	  		{"name1": "memphis", "name2": "grizzlies", "id": "UCCK5EpWKYrAmILfaZThCV-Q", "image": "images/griz.png"},
    	  		{"name1": "philadelphia", "name2": "76ers", "id": "UC5qJUyng_ezl0TVjVJFqtfQ", "image": "images/phil.png"},
    	  		{"name1": "new orleans", "name2": "pelicans", "id": "UCHvG7tf62PwI04ZRfoptRSw", "image": "images/bobs.png"},
    	  		{"name1": "toronto", "name2": "raptors", "id": "UCYBFE432C2AmNRDGEXE4uVg", "image": "images/raps.png"},
    	  		{"name1": "san antonio", "name2": "spurs", "id": "UCEZHE-0CoHqeL1LGFa2EmQw", "image": "images/spurs.png"},
    	  		{"name1": "chicago", "name2": "bulls", "id": "UCvZi1jVVZ2yq0k5kkjzmuGw", "image": "images/bulls.png"},
    	  		{"name1": "cleveland", "name2": "cavaliers", "id": "UCyNcWhTl9yVVp5UiDVvmKGQ", "image": "images/cavs.png"},
    	  		{"name1": "minnesota", "name2": "timberwolves", "id": "UCXWDN5NKVFgnPt25CMh98Cg", "image": "images/timber.png"},
    	  		{"name1": "detroit", "name2": "pistons", "id": "UCtcSBo9EzOtXHxiPhU6RN8A", "image": "images/pist.png"},
    	  		{"name1": "oklahoma city thunder", "id": "UCpXdQhy6kb5CTD8hKlmOL3w", "image": "images/okc.png"},
    	  		{"name1": "indiana", "name2": "pacers", "id": "UCUQDCnAwU-35cOo8WCzg6zA", "image": "images/pacers.png"},
    	  		{"name1": "portland", "name2": "trail blazers", "id": "UCXk66yyzXo7-2M1BMqLhltQ", "image": "images/blaze.png"},
    	  		{"name1": "milwaukee", "name2": "bucks", "id": "UCRZDEVva3Z8h_Q0VetTgDUA", "image": "images/bucks.png"},
    	  		{"name1": "utah", "name2": "jazz", "id": "UCv9iSdeI9IzWfV8yTDsMYWA", "image": "images/jazz.png"},
    	  		{"name1": "atlanta", "name2": "hawks", "id": "UCpfcwELvR1wtcRJ0UxNXHYw", "image": "images/hawks.png"},
    	  		{"name1": "golden state", "name2": "warriors", "id": "UCeYc_OjHs3QNxIjti2whKzg", "image": "images/wars.png"},
    	  		{"name1": "charlotte", "name2": "hornets", "id": "UCQ1xiR_X7acFbd4PwlnE4oQ", "image": "images/horns.png"},
    	  		{"name1": "los angeles", "name2": "lakers", "id": "UCbNWe0snu7U9H2qioNH2nvg", "image": "images/lakers.png"},
    	  		{"name1": "orlando", "name2": "magic", "id": "UCxHFH-yfbhUrsWY4prPx3oQ", "image": "images/magic.png"},
    	  		{"name1": "phoenix", "name2": "suns", "id": "UCLxlWVVHz2a8SdCfxzVXzQw", "image": "images/suns.png"},
    	  		{"name1": "washington", "name2": "wizards", "id": "UChvzoBPvORuNGtHTMzjUsIQ", "image": "images/wiz.png"},
    	  		{"name1": "sacramento", "name2": "kings", "id": "UCSgFigczGdNMilV1K23JgUQ", "image": "images/kings.png"}	
			];

            $localStorage.teamsList = channelNameIdList;
			var getId = function (channelName) {
                var channelFound = false;
				var channelLowCase = channelName.toLowerCase();
				for(var i = 0; i < channelNameIdList.length; i++) {
					var name1 = channelNameIdList[i].name1;
					var name2 = channelNameIdList[i].name2;
					var fullName = name1.concat(" " + name2);
					if ( channelLowCase === name1 || channelLowCase === name2 || channelLowCase === fullName ) {
						$localStorage.channelName = fullName.toUpperCase();
                        channelFound = true;
                        $localStorage.teamLogo = channelNameIdList[i].image;
						$window.location = "#/current";
						return channelNameIdList[i].id;
					} 
				}
			    if (!channelFound) {
                    $scope.searchInput = {'wrongInput': true};
                }
			};

	        $scope.channelFound = videosearch.find({
	        	query: getId($scope.channel)
	        });

	        $localStorage.currentVid = $scope.channelFound;
	 

	        
	    };
    

  });

