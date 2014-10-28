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
	.when('/bootstrap-elements', {
		templateUrl: 'templates/bootstrap-elements/bootstrap-elements.html',
		controller: 'BootstrapElementsCtrl'
	})
	.when('/bootstrap-grid', {
		templateUrl: 'templates/bootstrap-grid/bootstrap-grid.html',
		controller: 'BootstrapGridCtrl'
	})

	.otherwise({
		redirectTo: '/dashboard'
	});
	
});