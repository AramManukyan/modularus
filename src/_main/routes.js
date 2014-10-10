exampleApp.main

.config(function($routeProvider) {
	
	$routeProvider
	
	.when('/reports', {
		templateUrl: 'templates/reports/reports.html',
		controller: 'ReportsCtrl'
	})

	.when('/reports/:reportId', {
		templateUrl: 'templates/reports/reports.html',
		controller: 'ReportsCtrl'
	})

	.when('/reports/:reportId/:subreportId', {
		templateUrl: 'templates/reports/reports.html',
		controller: 'ReportsCtrl'
	})

	.otherwise({
		redirectTo: '/reports'
	});
	
});