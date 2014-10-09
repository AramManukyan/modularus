exampleApp.main

.config(function($routeProvider) {
	
	$routeProvider
	
	.when('/', {
		templateUrl: 'templates/home/home.html',
		controller: 'HomeCtrl'
	})

	.otherwise({
		redirectTo: '/'
	});
	
});