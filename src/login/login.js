exampleApp.login

.controller("LoginCtrl",  function ($scope,loginService) {
	
	$scope.data = {
		"username":"",
		"password":"",
	}
	
	$scope.login = function(){
		loginService.login($scope.data);
	};
	
});



