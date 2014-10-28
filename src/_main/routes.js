sbAdmin.main

.config(function($routeProvider) {
	
	$routeProvider

	.when('/dashboard', {
		templateUrl: 'templates/dashboard/dashboard.html',
		controller: 'DashboardCtrl'
	})

	.otherwise({
		redirectTo: '/dashboard'
	});
	
});