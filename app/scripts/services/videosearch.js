'use strict';

/**
 * @ngdoc service
 * @name angularAppApp.current
 * @description
 * # current
 * Factory in the angularAppApp.
 */
angular.module('angularAppApp')
  .factory('videosearch', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&channelId=:query&order=date&key=AIzaSyDZqbprMDMRgEyeJV3ink9cCfqzwpvs8xY', {}, {
      find: {
        method:'GET',
        params:{
          query: 'UCeYc_OjHs3QNxIjti2whKzg'        
        }
      }
    });  
});
