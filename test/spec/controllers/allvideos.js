'use strict';

describe('Controller: AllvideosCtrl', function () {

  // load the controller's module
  beforeEach(module('angularAppApp'));

  var AllvideosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AllvideosCtrl = $controller('AllvideosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AllvideosCtrl.awesomeThings.length).toBe(3);
  });
});
