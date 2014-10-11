exampleApp.main

.config(function($routeProvider) {
	
	$routeProvider

	.when('/reports/:reportId?', {
		templateUrl: 'templates/reports/reports.html',
		controller: 'ReportsCtrl'
	})

	.otherwise({
		redirectTo: '/reports'
	});
	
});