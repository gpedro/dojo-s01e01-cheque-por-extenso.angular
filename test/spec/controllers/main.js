'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('chequeApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('teste de bullyng com o Dhyego', function () {
    expect(MainCtrl.scope.zoeira).equal(':alo:');
  });
});
