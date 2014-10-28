sbAdmin.main

.config(function($routeProvider) {
	
	$routeProvider

	.when('/dashboard', {
		templateUrl: 'templates/dashboard/dashboard.html',
		controller: 'DashboardCtrl'
	})
	.when('/tables', {
		templateUrl: 'templates/tables/tables.html',
		controller: 'TablesCtrl'
	})

	.when('/forms', {
		templateUrl: 'templates/forms/forms.html',
		controller: 'FormsCtrl'
	})

	.otherwise({
		redirectTo: '/dashboard'
	});
	
});