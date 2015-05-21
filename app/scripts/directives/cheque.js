'use strict';

/**
 * @ngdoc directive
 * @name chequeApp.directive:cheque
 * @description
 * # cheque
 */
angular.module('chequeApp')
  .directive('cheque', function () {
    return {
      restrict: 'E',
      templateUrl: 'scripts/directives/cheque.html',
      scope: {
        valor: '='
      }
    };
  });
