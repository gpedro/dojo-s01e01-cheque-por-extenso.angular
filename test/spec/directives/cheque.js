'use strict';

describe('Directive: cheque', function () {

  // load the directive's module
  beforeEach(module('chequeApp'));

  var element, scope, template;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('um real', inject(function ($compile) {
    scope.valor = 1;
    element = angular.element('<cheque valor="1"></cheque>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.text()).toMatch('um real');
  }));

  it('dois reais', inject(function ($compile) {
    scope.valor = 2;
    element = angular.element('<cheque valor="2"></cheque>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.text()).toMatch('dois reais');
  }));

  it('cinquenta centavos', inject(function ($compile) {
    scope.valor = 0;
    element = angular.element('<cheque valor="0.5"></cheque>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.text()).toMatch('cinquenta centavos');
  }));

  it('cento e vinte e dois reais', inject(function ($compile) {
    scope.valor = 12
    element = angular.element('<cheque valor="122"></cheque>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.text()).toMatch('cento e vinte e dois reais');
  }));

  it('cento e quinze reais', inject(function ($compile) {
    scope.valor = 11
    element = angular.element('<cheque valor="115"></cheque>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.text()).toMatch('cento e quinze reais');
  }));

  it('cento e um reais', inject(function ($compile) {
    scope.valor = 10
    element = angular.element('<cheque valor="101"></cheque>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.text()).toMatch('cento e um reais');
  }));

  it('mil reais', inject(function ($compile) {
    scope.valor = 10
    element = angular.element('<cheque valor="1000"></cheque>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.text()).toMatch('mil reais');
  }));
});
