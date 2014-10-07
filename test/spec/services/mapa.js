'use strict';

describe('Service: mapa', function () {

  // load the service's module
  beforeEach(module('onsenApp'));

  // instantiate service
  var mapa;
  beforeEach(inject(function (_mapa_) {
    mapa = _mapa_;
  }));

  it('should do something', function () {
    expect(!!mapa).toBe(true);
  });

});
