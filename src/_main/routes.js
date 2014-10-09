exampleApp.main

.config(function($routeProvider) {
	
	$routeProvider
	
	.when('/', {
		templateUrl: 'templates/reports/reports.html',
		controller: 'ReportsCtrl'
	})

	.when('/reports/:reportName', {
		templateUrl: 'templates/reports/reports.html',
		controller: 'ReportsCtrl'
	})

	.otherwise({
		redirectTo: '/'
	});
	
});