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
	  when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'contactPageCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);

  
 phonecatApp.directive('loading', function () {
      return {
        restrict: 'E',
        replace:true,
        template: '<div class="loading" style="position:absolute; top:0px; left:0px; width:100%; height:100vh; display:block; background:rgba(255,255,255,0.7); z-index:999"><img src="img/loader.gif" width="50" height="50" style="margin: auto; position: absolute;top: 0; left: 0; bottom: 0; right: 0;"/></div></div>',
        link: function (scope, element, attr) {
              scope.$watch('loading', function (val) {
                  if (val)
                      $(element).show();
                  else
                      $(element).hide();
              });
        }
      }
  });