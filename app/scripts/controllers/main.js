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
    	  		{"name1": "miami", "name2": "heat", "id":"UC8bZbiKoPNRi3taABIaFeBw"},
    	  		{"name1": "boston", "name2": "celtics", "id": "UCMfT9dr6xC_RIWoA9hI0meQ"},
    	  		{"name1": "denver", "name2": "nuggets", "id": "UCl8hzdP5wVlhuzNG3WCJa1w"},		
    	  		{"name1": "los angeles", "name2": "clippers", "id": "UCoK6pw3iIVF9WAWnQd3hj-g"},
    	  		{"name1": "Brooklyn", "name2": "nets", "id": "UCTenKHt0h3VjdMvRWP6Lbvw"},
    	  		{"name1": "dallas", "name2": "mavericks", "id": "UCZywaCS_y9YOSSAC9z3dIeg"},
    	  		{"name1": "houston", "name2": "rockets", "id": "UC8SNI91tgp9O93EyCU579nQ"},
    	  		{"name1": "new york", "name2": "knicks", "id": "UC0hb8f0OXHEzDrJDUq-YVVw"},
    	  		{"name1": "memphis", "name2": "grizzlies", "id": "UCCK5EpWKYrAmILfaZThCV-Q"},
    	  		{"name1": "philadelphia", "name2": "76ers", "id": "UC5qJUyng_ezl0TVjVJFqtfQ"},
    	  		{"name1": "new orleans", "name2": "pelicans", "id": "UCHvG7tf62PwI04ZRfoptRSw"},
    	  		{"name1": "toronto", "name2": "raptors", "id": "UCYBFE432C2AmNRDGEXE4uVg"},
    	  		{"name1": "san antonio", "name2": "spurs", "id": "UCEZHE-0CoHqeL1LGFa2EmQw"},
    	  		{"name1": "chicago", "name2": "bulls", "id": "UCvZi1jVVZ2yq0k5kkjzmuGw"},
    	  		{"name1": "cleveland", "name2": "cavaliers", "id": "UCyNcWhTl9yVVp5UiDVvmKGQ"},
    	  		{"name1": "minnesota", "name2": "timberwolves", "id": "UCXWDN5NKVFgnPt25CMh98Cg"},
    	  		{"name1": "detroit", "name2": "pistons", "id": "UCtcSBo9EzOtXHxiPhU6RN8A"},
    	  		{"name1": "oklahoma city thunder", "id": "UCpXdQhy6kb5CTD8hKlmOL3w"},
    	  		{"name1": "indiana", "name2": "pacers", "id": "UCUQDCnAwU-35cOo8WCzg6zA"},
    	  		{"name1": "portland", "name2": "trail blazers", "id": "UCXk66yyzXo7-2M1BMqLhltQ"},
    	  		{"name1": "milwaukee", "name2": "bucks", "id": "UCRZDEVva3Z8h_Q0VetTgDUA"},
    	  		{"name1": "utah", "name2": "jazz", "id": "UCv9iSdeI9IzWfV8yTDsMYWA"},
    	  		{"name1": "atlanta", "name2": "hawks", "id": "UCpfcwELvR1wtcRJ0UxNXHYw"},
    	  		{"name1": "golden state", "name2": "warriors", "id": "UCeYc_OjHs3QNxIjti2whKzg"},
    	  		{"name1": "charlotte", "name2": "hornets", "id": "UCQ1xiR_X7acFbd4PwlnE4oQ"},
    	  		{"name1": "los angeles", "name2": "lakers", "id": "UCbNWe0snu7U9H2qioNH2nvg"},
    	  		{"name1": "orlando", "name2": "magic", "id": "UCxHFH-yfbhUrsWY4prPx3oQ"},
    	  		{"name1": "phoenix", "name2": "suns", "id": "UCLxlWVVHz2a8SdCfxzVXzQw"},
    	  		{"name1": "washington", "name2": "wizards", "id": "UChvzoBPvORuNGtHTMzjUsIQ"},
    	  		{"name1": "sacramento", "name2": "kings", "id": "UCSgFigczGdNMilV1K23JgUQ"}	
			];

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

