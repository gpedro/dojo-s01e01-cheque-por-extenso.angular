'use strict';

/**
 * @ngdoc overview
 * @name chequeApp
 * @description
 * # chequeApp
 *
 * Main module of the application.
 */
angular
  .module('chequeApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
