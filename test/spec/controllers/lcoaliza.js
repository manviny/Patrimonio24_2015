'use strict';

describe('Controller: LcoalizaCtrl', function () {

  // load the controller's module
  beforeEach(module('onsenApp'));

  var LcoalizaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LcoalizaCtrl = $controller('LcoalizaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
