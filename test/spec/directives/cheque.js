'use strict';

describe('Directive: cheque', function () {

  // load the directive's module
  beforeEach(module('chequeApp'));

  var element, scope, template;

  beforeEach(inject(function ($templateCache, $rootScope) {
    template = $templateCache.get('../app/scripts/directives/cheque.html');
    $templateCache.put('scripts/directives/cheque.html',template);

    scope = $rootScope.$new();
  }));

  it('um real', inject(function ($compile) {
    scope.valor = 1;
    element = angular.element('<cheque valor="1"></cheque>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('um real');
  }));

  it('dois reais', inject(function ($compile) {
    scope.valor = 2;
    element = angular.element('<cheque valor="2"></cheque>');
    element = $compile(element)(scope);
    scope.$digest();
    console.log(element.text());
    expect(element.text()).toBe('dois reais');
  }));

  it('cinquenta centavos', inject(function ($compile) {
    scope.valor = 0;
    element = angular.element('<cheque valor="0.5"></cheque>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.text()).toBe('cinquenta centavos');
  }));

  it('cento e vinte e dois reais', inject(function ($compile) {
    scope.valor = 12
    element = angular.element('<cheque valor="122"></cheque>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.text()).toBe('cento e vinte e dois reais');
  }));

  it('cento e quinze reais', inject(function ($compile) {
    scope.valor = 11
    element = angular.element('<cheque valor="115"></cheque>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.text()).toBe('cento e quinze reais');
  }));

  it('cento e um reais', inject(function ($compile) {
    scope.valor = 10
    element = angular.element('<cheque valor="101"></cheque>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.text()).toBe('cento e um reais');
  }));

  it('mil reais', inject(function ($compile) {
    scope.valor = 10
    element = angular.element('<cheque valor="1000"></cheque>');
    element = $compile(element)(scope);
    scope.$digest();
    expect(element.text()).toBe('mil reais');
  }));
});
