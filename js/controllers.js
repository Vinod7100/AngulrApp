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
	
	$scope.openProfile = function(pathurl){
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
	
	if (localStorage.getItem("xxDealsUsername") !== "") {
		$scope.xxDealsUsername = localStorage.getItem("xxDealsUsername");
		$scope.xxDealsPassword = localStorage.getItem("xxDealsPassword");
		$scope.loading = true;
		$http.get('http://parssv.com/sensemedia/app/?action=login&email='+ $scope.xxDealsUsername +'&password='+ $scope.xxDealsPassword).success(function(data) {
			$scope.userData = data;
			$scope.loading = false;
			if($scope.userData.status == 'verified'){
				var pathurl = "/profile";
				console.log(pathurl);
				$location.path(pathurl);
			}
		});
	}
	
	$scope.username = "";
	$scope.password = "";
	
	$scope.submit = function() {
		$scope.loading = true;
		
		$http.get('http://parssv.com/sensemedia/app/?action=login&email='+ $scope.username +'&password='+ $scope.password).success(function(data) {
			$scope.userDetails = data;
			$scope.loading = false;
			if($scope.userDetails.status == 'verified'){
				var pathurl = "/profile";
				console.log(pathurl);
				
				// Check browser support
				if (typeof(Storage) != "undefined") {
					// set localstorage username and password variables
					localStorage.setItem("xxDealsUsername", $scope.username);
					localStorage.setItem("xxDealsPassword", $scope.password);
					//saving username and password to localstoarge.
					$scope.xxDealsUsername = localStorage.getItem("xxDealsUsername");
					$scope.xxDealsPassword = localStorage.getItem("xxDealsPassword");
					
					$location.path(pathurl)  //uncomment to redirect to the profile page
				} 
				else {
					document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
				}
				
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
		$scope.loading = true;
		$http.get('http://parssv.com/sensemedia/app/?action=register&name='+ $scope.name +'&email='+ $scope.email +'&password='+$scope.password).success(function(data) {
			$scope.userDetails = data;
			$scope.loading = false;
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
		$scope.loading = true;
		$http.get('http://parssv.com/sensemedia/app/?action=recover&email='+ $scope.email).success(function(data) {
			$scope.userDetails = data;
			$scope.loading = false;
		});
	};
	
}]);

/****** Contact Page controller *****/
phonecatControllers.controller('contactPageCtrl', ['$scope', '$http', '$location',
  function($scope, $http, $location) {
	  
	$scope.showPage = function(pathurl){
		console.log(pathurl);
		$location.path(pathurl)
	}
	
	$scope.name = "";
	$scope.email = "";
	$scope.subject = "";
	$scope.message = "";
	
	$scope.submit = function() {
		$scope.loading = true;
		$http.get('http://parssv.com/sensemedia/app/?action=contact_submit&name='+ $scope.name +'&email='+ $scope.email +'&subject='+ $scope.subject +'&message='+ $scope.message).success(function(data) {
			$scope.userDetails = data;
			$scope.loading = false;
			// empty all varibales
			$scope.name = "";
			$scope.email = "";
			$scope.subject = "";
			$scope.message = "";
		});
	};
}]);

/****** Profile Page controller *****/
phonecatControllers.controller('profilePageCtrl', ['$scope', '$http', '$location',
  function($scope, $http, $location) {
	
	$scope.showPage = function(pathurl){
		console.log(pathurl);
		$location.path(pathurl)
	}
	
}]);

/****** Privacy Page controller *****/
phonecatControllers.controller('privacyPageCtrl', ['$scope', '$http', '$location',
  function($scope, $http, $location) {
	  
	$scope.showPage = function(pathurl){
		console.log(pathurl);
		$location.path(pathurl)
	}

	$http.get('http://parssv.com/sensemedia/app/?action=get_privacyPage_content').success(function(data) {
		$scope.content = data;
		if($scope.content.success == "true"){
			$scope.pageContent = $scope.content.message;
		}
	});
}]);

/****** Add New Item Page controller *****/
phonecatControllers.controller('addNewItemPageCtrl', ['$scope', '$http', '$location',
  function($scope, $http, $location) {
	  
	$scope.showPage = function(pathurl){
		console.log(pathurl);
		$location.path(pathurl)
	}

}]);

/****** Offers Page controller *****/
phonecatControllers.controller('offersPageCtrl', ['$scope', '$http', '$location',
  function($scope, $http, $location) {
	  
	$scope.showPage = function(pathurl){
		console.log(pathurl);
		$location.path(pathurl)
	}

}]);

/****** Settings Page controller *****/
phonecatControllers.controller('settingsPageCtrl', ['$scope', '$http', '$location',
  function($scope, $http, $location) {
	  
	$scope.showPage = function(pathurl){
		console.log(pathurl);
		$location.path(pathurl)
	}
	
	if (localStorage.getItem("xxDealsUsername") !== "") {
		$scope.xxDealsUsername = localStorage.getItem("xxDealsUsername");
		$scope.xxDealsPassword = localStorage.getItem("xxDealsPassword");
		$scope.loading = true;
		$http.get('http://parssv.com/sensemedia/app/?action=login&email='+ $scope.xxDealsUsername +'&password='+ $scope.xxDealsPassword).success(function(data) {
			$scope.userData = data;
			$scope.loading = false;
			if($scope.userData.status == 'verified'){
				$scope.name = $scope.userData.name;
				$scope.location = $scope.userData.location;
				$scope.newsletter = $scope.userData.newsletter;
				$scope.userID = $scope.userData.id;
			}
			else{
				var pathurl = "/login";
				console.log(pathurl);
				$scope.loading = false;
				$location.path(pathurl);
			}
		});
	}
	
	$scope.submit = function() {
		$scope.loading = true;
		$http.get('http://parssv.com/sensemedia/app/?action=updateSettings&name='+ $scope.name +'&location='+ $scope.location +'&newsletter='+$scope.newsletter +'&userID='+$scope.userID).success(function(data) {
			$scope.userDetails = data;
			$scope.loading = false;
		});
	};
	
}]);

/******Change Password Page controller *****/
phonecatControllers.controller('changePasswordPageCtrl', ['$scope', '$http', '$location',
  function($scope, $http, $location) {
	  
	$scope.showPage = function(pathurl){
		console.log(pathurl);
		$location.path(pathurl)
	}
	
	if (localStorage.getItem("xxDealsUsername") !== "") {
		$scope.xxDealsUsername = localStorage.getItem("xxDealsUsername");
		$scope.xxDealsPassword = localStorage.getItem("xxDealsPassword");
		$scope.loading = true;
		$http.get('http://parssv.com/sensemedia/app/?action=login&email='+ $scope.xxDealsUsername +'&password='+ $scope.xxDealsPassword).success(function(data) {
			$scope.userData = data;
			$scope.loading = false;
			if($scope.userData.status == 'verified'){
				$scope.userID = $scope.userData.id;
			}
			else{
				var pathurl = "/login";
				console.log(pathurl);
				$scope.loading = false;
				$location.path(pathurl);
			}
		});
	}
	
	$scope.submit = function() {
		$scope.loading = true;
		$http.get('http://parssv.com/sensemedia/app/?action=changePassword&currentPassword='+ $scope.currentPassword +'&newPassword='+ $scope.newPassword +'&confirmPassword='+$scope.confirmPassword +'&userID='+$scope.userID).success(function(data) {
			$scope.userDetails = data;
			$scope.loading = false;
		});
	};
}]);

/****** List Page controller *****/
phonecatControllers.controller('listPageCtrl', ['$scope', '$http', '$location',
  function($scope, $http, $location) {
	  
	$scope.showPage = function(pathurl){
		console.log(pathurl);
		$location.path(pathurl)
	}
	$scope.limit = "10";

	$scope.loading = true;
	$http.get('http://parssv.com/sensemedia/app/?action=show_latest&limit='+ $scope.limit).success(function(data) {
		$scope.items = data;
		$scope.loading = false;
	});
}]);