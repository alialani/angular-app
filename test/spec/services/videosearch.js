'use strict';

describe('Service: videosearch', function () {

  // load the service's module
  beforeEach(module('angularAppApp'));

  // instantiate service
  var videosearch;
  beforeEach(inject(function (_videosearch_) {
    videosearch = _videosearch_;
  }));

  it('should do something', function () {
    expect(!!videosearch).toBe(true);
  });

});
