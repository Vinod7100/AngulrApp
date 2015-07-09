'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'ngSanitize',
  'phonecatControllers'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
	  when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'homePageCtrl'
      }).
	  when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'loginPageCtrl'
      }).
	  when('/registration', {
        templateUrl: 'partials/registration.html',
        controller: 'registrationPageCtrl'
      }).
	  when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'aboutPageCtrl'
      }).
	  when('/help', {
        templateUrl: 'partials/help.html',
        controller: 'helpPageCtrl'
      }).
	  when('/forgotPassword', {
        templateUrl: 'partials/forgot.html',
        controller: 'forgotPasswordPageCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);
