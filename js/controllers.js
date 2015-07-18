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
	
	if (1 == 1) { // checking username and Password if already in localstoarge
		$scope.xxDealsUsername = localStorage.getItem("xxDealsUsername");
		$scope.xxDealsPassword = localStorage.getItem("xxDealsPassword");
		$scope.loading = true;
		$http.get('http://parssv.com/sensemedia/app/?action=login&email='+ $scope.xxDealsUsername +'&password='+ $scope.xxDealsPassword).success(function(data) {
			$scope.userData = data;
			$scope.loading = false;
			if($scope.userData.status == 'verified'){
				$scope.userID = $scope.userData.id;
				var pathurl = "/profile";
				console.log(pathurl);
				$scope.loading = false;
				$location.path(pathurl);
			}
		});
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
	
	if (1 == 1) {
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
	
	$scope.showPage = function(pathurl){
		console.log(pathurl);
		$location.path(pathurl)
	}
	
	$scope.logout = function(){
		$scope.loading = true;
		// unset localstorage username and password variables
		localStorage.setItem("xxDealsUsername", "");
		localStorage.setItem("xxDealsPassword", "");
		var pathurl = "/home";
		$scope.loading = false;
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
	
	$scope.loading = true;
	$http.get('http://parssv.com/sensemedia/app/?action=list_categories').success(function(data) {
		$scope.category = data;
		$scope.loading = false;
	});
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
	
	if (1 == 1) {
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
				$scope.user_id = $scope.userData.id;
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
		console.log($scope.name);
		console.log($scope.location);
		console.log($scope.newsletter);
		console.log($scope.user_id);
		$scope.loading = true;
		$http.get('http://parssv.com/sensemedia/app/?action=update_settings&name='+ $scope.name +'&location='+ $scope.location +'&newsletter='+$scope.newsletter +'&user_id='+$scope.user_id).success(function(data) {
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
	
	if (1 == 1) { // checking username and Password if already in localstoarge
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
			if($scope.userDetails.success == "true"){ //if password changed reset the form
				$scope.currentPassword = "";
				$scope.newPassword = "";
				$scope.confirmPassword = "";
			}
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
	if (1 == 1) { // checking username and Password if already in localstoarge
		$scope.xxDealsUsername = localStorage.getItem("xxDealsUsername");
		$scope.xxDealsPassword = localStorage.getItem("xxDealsPassword");
		$scope.loading = true;
		$http.get('http://parssv.com/sensemedia/app/?action=login&email='+ $scope.xxDealsUsername +'&password='+ $scope.xxDealsPassword).success(function(data) {
			$scope.userData = data;
			$scope.loading = false;
			if($scope.userData.status == 'verified'){
				$scope.userID = $scope.userData.id;
				console.log($scope.userID);
				$scope.loading = true;
				$http.get('http://parssv.com/sensemedia/app/?action=show_latest&user_id='+ $scope.userID +'&limit='+ $scope.limit).success(function(data) {
					$scope.items = data;
					$scope.loading = false;
				});
			}
			else{
				var pathurl = "/login";
				console.log(pathurl);
				$scope.loading = false;
				$location.path(pathurl);
			}
		});
	}
	
	$scope.limit = "10";
    
	
	$http.get('http://parssv.com/sensemedia/app/?action=list_categories').success(function(data) {
		$scope.category = data;
		$scope.loading = false;
	});
	
	$scope.showItem = function(item_id) {
		var pathurl = "/show_single_item";
		console.log(pathurl);
		$location.path(pathurl).search('id', item_id);
		
		
	};
}]);

/****** Show Single Item Page controller *****/
phonecatControllers.controller('showPageCtrl', ['$scope', '$http', '$location','$routeParams', '$modal', '$log',
  function($scope, $http, $location, $routeParams,$modal, $log) {
	  $scope.showPage = function(pathurl){
		console.log(pathurl);
		$location.path(pathurl)
	}
	$scope.len = [];
	
	$scope.animationsEnabled = true;
	$scope.open = function (size) {

		var modalInstance = $modal.open({
		  animation: $scope.animationsEnabled,
		  templateUrl: 'myModalContent.html',
		  controller: 'ModalInstanceCtrl',
		  size: size,
		  resolve: {
			items: function () {
			  return $scope.items;
			}
		  }
		});
	
	}
	
	$scope.open1 = function (size) {

		var modalInstance = $modal.open({
		  animation: $scope.animationsEnabled,
		  templateUrl: 'myModal.html',
		  controller: 'ModalCtrl',
		  size: size,
		  resolve: {
			items: function () {
			  return $scope.items;
			}
		  }
		});
	
	}
	
	  $scope.item_id = $routeParams.id;
	  //console.log($scope.item_id);
	 
		$scope.loading = true;
		$http.get('http://parssv.com/sensemedia/app/?action=item_details&item_id='+ $scope.item_id).success(function(data) {
			$scope.itemDetails = data;
			$scope.loading = false;
			var len = $scope.itemDetails.images.length;
			for(var i = 0; i < len; i++){
				$scope.len.push (i);
				
				console.log($scope.len);
			}
		});
	
}]);

/********** Show Buy Modal Controller*******************/
phonecatControllers.controller('ModalInstanceCtrl', function ($http, $scope, $modalInstance, $routeParams) {
	
	if (1 == 1) { // checking username and Password if already in localstoarge
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
	
	$scope.submit = function(){
	$scope.loading = true;
	$scope.type="offer";
	$scope.item_id = $routeParams.id;
	console.log($scope.item_id);
	$http.get('http://parssv.com/sensemedia/app/?action=make_an_offer&user_id='+ $scope.userID +'&type='+ $scope.type + '&item_id='+ $scope.item_id + '&price='+ $scope.price).success(function(data) {
		$scope.offer = data;
		$scope.loading = false;
		//$modalInstance.dismiss('cancel');
	});
	}

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});

/********** Show Ask a Query Modal Controller*******************/
phonecatControllers.controller('ModalCtrl', function ($http, $scope, $modalInstance, $routeParams) {
	
  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
  
  if (1 == 1) { // checking username and Password if already in localstoarge
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
	
	$scope.submit = function(){
	$scope.loading = true;
	$scope.type="message";
	$scope.item_id = $routeParams.id;
	//console.log($scope.item_id);
	$http.get('http://parssv.com/sensemedia/app/?action=ask_a_query&user_id='+ $scope.userID +'&type='+ $scope.type + '&item_id='+ $scope.item_id + '&message='+ $scope.query).success(function(data) {
		$scope.query = data;
		$scope.loading = false;
		//$modalInstance.dismiss('cancel');
	});
	}
});

/****** Selling Page controller *****/
phonecatControllers.controller('sellingPageCtrl', ['$scope', '$http', '$location',
  function($scope, $http, $location) {
	
	$scope.showPage = function(pathurl){
		console.log(pathurl);
		$location.path(pathurl)
	}
	$scope.limit = "10";
	
	if (1 == 1) { // checking username and Password if already in localstoarge
		$scope.xxDealsUsername = localStorage.getItem("xxDealsUsername");
		$scope.xxDealsPassword = localStorage.getItem("xxDealsPassword");
		$scope.loading = true;
		$http.get('http://parssv.com/sensemedia/app/?action=login&email='+ $scope.xxDealsUsername +'&password='+ $scope.xxDealsPassword).success(function(data) {
			$scope.userData = data;
			$scope.loading = false;
			if($scope.userData.status == 'verified'){
				$scope.userID = $scope.userData.id;
				console.log($scope.userID);
				$scope.submit();
			}
			else{
				var pathurl = "/login";
				console.log(pathurl);
				//$scope.loading = false;
				$location.path(pathurl);
			}
		});
	};
	$scope.submit = function(){
	$scope.loading = true;
	$http.get('http://parssv.com/sensemedia/app/?action=user_selling&user_id='+ $scope.userID +'&limit='+ $scope.limit + '&page=0').success(function(data) {
		$scope.selling = data;
		$scope.loading = false;
	});
	}
	
	$scope.del = function(item_id) {
		if(confirm("Do You Really Want to Delete This Item!")){
		$scope.item_id = item_id;
		console.log($scope.item_id);
		$scope.loading = true;
		$http.get('http://parssv.com/sensemedia/app/?action=delete_item&item_id='+ $scope.item_id +'&user_id='+ $scope.userID).success(function(data) {
			$scope.userDetails = data;
			$scope.loading = false;
			window.location.reload();
		});
	}
	};
	
	$scope.discussionList = function(item_id) {
		var pathurl = "/discussionUsersList";
		console.log(pathurl);
		$location.path(pathurl).search('id', item_id);
	};
	
}]);

/****** Buying Page controller *****/
phonecatControllers.controller('buyingPageCtrl', ['$scope', '$http', '$location',
  function($scope, $http, $location) {
	  
	$scope.showPage = function(pathurl){
		console.log(pathurl);
		$location.path(pathurl)
	}
	
	$scope.limit = "10";
	
	if (1 == 1) { // checking username and Password if already in localstoarge
		$scope.xxDealsUsername = localStorage.getItem("xxDealsUsername");
		$scope.xxDealsPassword = localStorage.getItem("xxDealsPassword");
		$scope.loading = true;
		$http.get('http://parssv.com/sensemedia/app/?action=login&email='+ $scope.xxDealsUsername +'&password='+ $scope.xxDealsPassword).success(function(data) {
			$scope.userData = data;
			$scope.loading = false;
			if($scope.userData.status == 'verified'){
				$scope.userID = $scope.userData.id;
				console.log($scope.userID);
				$scope.submit();
			}
			else{
				var pathurl = "/login";
				console.log(pathurl);
				//$scope.loading = false;
				$location.path(pathurl);
			}
		});
	};
	$scope.submit = function(){
	$scope.loading = true;
	$http.get('http://parssv.com/sensemedia/app/?action=user_buying&user_id='+ $scope.userID +'&limit='+ $scope.limit + '&page=0').success(function(data) {
		$scope.buying = data;
		$scope.loading = false;
	});
	}
	
	$scope.viewDiscussion = function(item_id) {
		var pathurl = "/discussion";
		console.log(pathurl);
		$location.path(pathurl).search('item_id', item_id);
	};
	
	$scope.showItem = function(item_id) {
		var pathurl = "/show_single_item";
		console.log(pathurl);
		$location.path(pathurl).search('id', item_id);
	};
}]);

/****** Show Discussion Page controller *****/
phonecatControllers.controller('discussionPageCtrl', ['$scope', '$http', '$location','$routeParams', '$modal', '$log',
  function($scope, $http, $location, $routeParams,$modal, $log) {
	  $scope.showPage = function(pathurl){
		console.log(pathurl);
		$location.path(pathurl)
	}
	$scope.item_id = $routeParams.item_id;
	
	if (1 == 1) { // checking username and Password if already in localstoarge
		$scope.xxDealsUsername = localStorage.getItem("xxDealsUsername");
		$scope.xxDealsPassword = localStorage.getItem("xxDealsPassword");
		$scope.loading = true;
		$http.get('http://parssv.com/sensemedia/app/?action=login&email='+ $scope.xxDealsUsername +'&password='+ $scope.xxDealsPassword).success(function(data) {
			$scope.userData = data;
			$scope.loading = false;
			if($scope.userData.status == 'verified'){
				$scope.userID = $scope.userData.id;
				console.log($scope.userID);
				
				$http.get('http://parssv.com/sensemedia/app/?action=view_discussion&item_id='+ $scope.item_id +'&user_id='+ $scope.userID).success(function(data) {
				$scope.messages = data;
				});
			}
			else{
				var pathurl = "/login";
				console.log(pathurl);
				$scope.loading = false;
				$location.path(pathurl);
			}
		});
	}
	
	
	
	$scope.submit = function(){
	$scope.loading = true;
	$scope.type="message";
	console.log($scope.type);
	$http.get('http://parssv.com/sensemedia/app/?action=ask_a_query&user_id='+ $scope.userID +'&type='+ $scope.type + '&item_id='+ $scope.item_id + '&message='+ $scope.query).success(function(data) {
		$scope.query = data;
		$scope.loading = false;
		window.location.reload();
	});
	}
}]);	
/****** Watching Page controller *****/
phonecatControllers.controller('watchingPageCtrl', ['$scope', '$http', '$location',
  function($scope, $http, $location) {
	  
	$scope.showPage = function(pathurl){
		console.log(pathurl);
		$location.path(pathurl)
	}
	$scope.limit = "10";
	
	if (1 == 1) { // checking username and Password if already in localstoarge
		$scope.xxDealsUsername = localStorage.getItem("xxDealsUsername");
		$scope.xxDealsPassword = localStorage.getItem("xxDealsPassword");
		$scope.loading = true;
		$http.get('http://parssv.com/sensemedia/app/?action=login&email='+ $scope.xxDealsUsername +'&password='+ $scope.xxDealsPassword).success(function(data) {
			$scope.userData = data;
			$scope.loading = false;
			if($scope.userData.status == 'verified'){
				$scope.userID = $scope.userData.id;
				console.log($scope.userID);
				$scope.submit();
			}
			else{
				var pathurl = "/login";
				console.log(pathurl);
				//$scope.loading = false;
				$location.path(pathurl);
			}
		});
	};
	$scope.submit = function(){
	$scope.loading = true;
	$http.get('http://parssv.com/sensemedia/app/?action=user_watching&user_id='+ $scope.userID +'&limit='+ $scope.limit + '&page=0').success(function(data) {
		$scope.watching = data;
		$scope.loading = false;
	});
	}
	
	$scope.showItem = function(item_id) {
		var pathurl = "/show_single_item";
		console.log(pathurl);
		$location.path(pathurl).search('id', item_id);
	};
}]);

/****** Discussion user list Page controller *****/
phonecatControllers.controller('discussionUsersListPageCtrl', ['$scope', '$http', '$location','$routeParams', '$modal', '$log',
  function($scope, $http, $location, $routeParams,$modal, $log) {
	  $scope.showPage = function(pathurl){
		console.log(pathurl);
		$location.path(pathurl)
	}
	
	
	  $scope.item_id = $routeParams.id;
	  console.log($scope.item_id);
	  if (1 == 1) { // checking username and Password if already in localstoarge
		$scope.xxDealsUsername = localStorage.getItem("xxDealsUsername");
		$scope.xxDealsPassword = localStorage.getItem("xxDealsPassword");
		$scope.loading = true;
		$http.get('http://parssv.com/sensemedia/app/?action=login&email='+ $scope.xxDealsUsername +'&password='+ $scope.xxDealsPassword).success(function(data) {
			$scope.userData = data;
			//$scope.loading = false;
			if($scope.userData.status == 'verified'){
				$scope.userID = $scope.userData.id;
				console.log($scope.userID);
				
				$scope.loading = true;
				$http.get('http://parssv.com/sensemedia/app/?action=discussion_list&item_id='+ $scope.item_id +'&user_id='+ $scope.userID).success(function(data) {
					$scope.list = data;
					console.log($scope.list);
					$scope.loading = false;
				});
			}
			else{
				var pathurl = "/login";
				console.log(pathurl);
				//$scope.loading = false;
				$location.path(pathurl);
			}
		});
	};
	
	$scope.submit = function(){
	$scope.loading = true;
	console.log($scope.type);
	$http.get('http://parssv.com/sensemedia/app/?action=ask_a_query&user_id='+ $scope.userID + '&item_id='+ $scope.item_id + '&message='+ $scope.query).success(function(data) {
		$scope.query = data;
		$scope.loading = false;
		window.location.reload();
	});
	}
	
	$scope.replyUser = function(user_id) {
		var pathurl = "/reply";
		console.log(pathurl);
		$scope.user_id = user_id;
		$location.path(pathurl).search({user_id:user_id, item_id:$scope.item_id});
	};
				
		
}]);

/****** Discussion user list Page controller *****/
phonecatControllers.controller('replyPageCtrl', ['$scope', '$http', '$location','$routeParams', '$modal', '$log',
  function($scope, $http, $location, $routeParams,$modal, $log) {
	  $scope.showPage = function(pathurl){
		console.log(pathurl);
		$location.path(pathurl)
	}
	if (1 == 1) { // checking username and Password if already in localstoarge
		$scope.xxDealsUsername = localStorage.getItem("xxDealsUsername");
		$scope.xxDealsPassword = localStorage.getItem("xxDealsPassword");
		$scope.loading = true;
		$http.get('http://parssv.com/sensemedia/app/?action=login&email='+ $scope.xxDealsUsername +'&password='+ $scope.xxDealsPassword).success(function(data) {
			$scope.userData = data;
			//$scope.loading = false;
			if($scope.userData.status == 'verified'){
				$scope.userID = $scope.userData.id;
				console.log($scope.userID);
				
				$scope.loading = true;
				$http.get('http://parssv.com/sensemedia/app/?action=discussion_list&item_id='+ $scope.item_id +'&user_id='+ $scope.userID).success(function(data) {
					$scope.list = data;
					console.log($scope.list);
					$scope.loading = false;
				});
			}
			else{
				var pathurl = "/login";
				console.log(pathurl);
				//$scope.loading = false;
				$location.path(pathurl);
			}
		});
	};
	
$scope.user_id = $routeParams.user_id;
$scope.item_id = $routeParams.item_id;
	  console.log($scope.item_id);
	  
	  $http.get('http://parssv.com/sensemedia/app/?action=view_discussion&item_id='+ $scope.item_id +'&user_id='+ $scope.user_id).success(function(data) {
				$scope.messages = data;
				});
		
			
	$scope.submit = function(){
	$scope.loading = true;
	console.log($scope.userID);
	$http.get('http://parssv.com/sensemedia/app/?action=ask_a_query&user_id='+ $scope.user_id +'&item_id='+ $scope.item_id + '&message='+ $scope.query +'&user_login_id='+ $scope.userID).success(function(data) {
		$scope.query = data;
		$scope.loading = false;
		window.location.reload();
	});
	}
}]);