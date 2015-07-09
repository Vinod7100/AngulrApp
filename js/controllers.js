'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);


phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
  }]);

/****** Home Page controller *****/  
phonecatControllers.controller('homePageCtrl', ['$scope', '$http', '$location',
  function($scope, $http, $location) {
	  
	$scope.showPage = function(pathurl){
		console.log(pathurl);
		$location.path(pathurl)
	}
}]);

/****** Login Page controller *****/
phonecatControllers.controller('loginPageCtrl', ['$scope', '$http', '$location',
  function($scope, $http, $location) {
	  
	$scope.showPage = function(pathurl){
		console.log(pathurl);
		$location.path(pathurl)
	}
	
	$scope.username = "";
	$scope.password = "";
	
	$scope.submit = function() {
		$http.get('http://parssv.com/sensemedia/app/?action=login&email='+ $scope.username +'&password='+ $scope.password).success(function(data) {
			$scope.userDetails = data;
			if($scope.userDetails.status == 'verified'){
				var pathurl = "/profile";
				console.log(pathurl);
				$location.path(pathurl)
			}
		});
	};
}]);

/****** Registration Page controller *****/
phonecatControllers.controller('registrationPageCtrl', ['$scope', '$http', '$location',
  function($scope, $http, $location) {
	  
	$scope.showPage = function(pathurl){
		console.log(pathurl);
		$location.path(pathurl)
	}
	
	$scope.name = "";
	$scope.email = "";
	$scope.password = "";
	
	$scope.submit = function() {
		$http.get('http://parssv.com/sensemedia/app/?action=register&name='+ $scope.name +'&email='+ $scope.email +'&password='+$scope.password).success(function(data) {
			$scope.userDetails = data;
		});
	};
}]);

/****** About Page controller *****/
phonecatControllers.controller('aboutPageCtrl', ['$scope', '$http', '$location',
  function($scope, $http, $location) {
	  
	$scope.showPage = function(pathurl){
		console.log(pathurl);
		$location.path(pathurl)
	}

	$http.get('http://parssv.com/sensemedia/app/?action=get_aboutPage_content').success(function(data) {
		$scope.content = data;
		if($scope.content.success == "true"){
			$scope.pageContent = $scope.content.message;
		}
	});
}]);


/****** Help Page controller *****/
phonecatControllers.controller('helpPageCtrl', ['$scope', '$http', '$location',
  function($scope, $http, $location) {
	  
	$scope.showPage = function(pathurl){
		console.log(pathurl);
		$location.path(pathurl)
	}

	$http.get('http://parssv.com/sensemedia/app/?action=get_helpPage_content').success(function(data) {
		$scope.content = data;
		if($scope.content.success == "true"){
			$scope.pageContent = $scope.content.message;
		}
	});
	
}]);

/****** Forgot Password Page controller *****/
phonecatControllers.controller('forgotPasswordPageCtrl', ['$scope', '$http', '$location',
  function($scope, $http, $location) {
	  
	$scope.showPage = function(pathurl){
		console.log(pathurl);
		$location.path(pathurl)
	}
	
	$scope.email = "";
	
	$scope.submit = function() {
		$http.get('http://parssv.com/sensemedia/app/?action=recover&email='+ $scope.email).success(function(data) {
			$scope.userDetails = data;
		});
	};
	
}]);