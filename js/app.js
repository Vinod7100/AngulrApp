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
	  when('/profile', {
        templateUrl: 'partials/profile.html',
        controller: 'profilePageCtrl'
      }).
	  when('/privacy', {
        templateUrl: 'partials/privacy.html',
        controller: 'privacyPageCtrl'
      }).
	  when('/offers', {
        templateUrl: 'partials/offers.html',
        controller: 'offersPageCtrl'
      }).
	  when('/settings', {
        templateUrl: 'partials/settings.html',
        controller: 'settingsPageCtrl'
      }).
	  when('/addNewItem', {
        templateUrl: 'partials/addNewItem.html',
        controller: 'addNewItemPageCtrl'
      }).
	  when('/changePassword', {
        templateUrl: 'partials/changePassword.html',
        controller: 'changePasswordPageCtrl'
      }).
	  when('/list', {
        templateUrl: 'partials/list.html',
        controller: 'listPageCtrl'
      }).
	  when('/selling', {
        templateUrl: 'partials/selling.html',
        controller: 'sellingPageCtrl'
      }).
	  when('/buying', {
        templateUrl: 'partials/buying.html',
        controller: 'buyingPageCtrl'
      }).
	  when('/watching', {
        templateUrl: 'partials/watching.html',
        controller: 'watchingPageCtrl'
      }).
	  when('/show_single_item', {
        templateUrl: 'partials/show_single_item.html',
		controller: 'showPageCtrl'
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