'use strict';
/* global Cheque: true */
/**
 * @ngdoc function
 * @name chequeApp.controller:ChequeCtrl
 * @description
 * # ChequeCtrl
 * Controller of the chequeApp
 */
angular.module('chequeApp')
  .controller('ChequeCtrl', function ($scope) {
    $scope.cheque = new Cheque($scope.valor).humanize();
  });
