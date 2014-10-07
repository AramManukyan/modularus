exampleApp.login

.controller("LoginCtrl",  function ($scope,loginService,$rootScope, $firebase, $firebaseSimpleLogin) {
	
	$scope.data = {
		email:'',
		password:'',
		rememberMe: true
	}

	var firebaseRef = new Firebase("https://burning-torch-252.firebaseio.com/");
    
    console.log(firebaseRef);
	// Create a Firebase Simple Login object
	$scope.auth = $firebaseSimpleLogin(firebaseRef);
	
	// Initially set no user to be logged in
	$scope.user = null;

	// Logs a user in with inputted provider
	$scope.login = function(provider) {
		$scope.auth.$login(provider);
	};

	$scope.simpleLogin = function() {
		$scope.auth.$login('password',$scope.data);
	};


	// Logs a user out
	$scope.logout = function() {
		$scope.auth.$logout();
	};

	// Upon successful login, set the user object
	$rootScope.$on("$firebaseSimpleLogin:login", function(event, user) {
		$scope.user = user;
	});

	// Upon successful logout, reset the user object
	$rootScope.$on("$firebaseSimpleLogin:logout", function(event) {
		$scope.user = null;
	});

	// Log any login-related errors to the console
	$rootScope.$on("$firebaseSimpleLogin:error", function(event, error) {
		console.log("Error logging user in: ", error);
	});
    
});