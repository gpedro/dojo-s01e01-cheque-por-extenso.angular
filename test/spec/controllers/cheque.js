'use strict';

describe('Controller: ChequeCtrl', function () {

  // load the controller's module
  beforeEach(module('chequeApp'));

  var ChequeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChequeCtrl = $controller('ChequeCtrl', {
      $scope: scope
    });
  }));

  it('não possui o valor', function () {
    expect(scope.valor).toBe(undefined);
  });
});
