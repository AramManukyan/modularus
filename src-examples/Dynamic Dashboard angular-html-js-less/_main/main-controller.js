exampleApp.main

.controller("MainCtrl", function($scope, $log, $route, $routeParams, $location, ReportsService) {

	$scope.reports = [];

	// Getting reports configuration, so we can
	// set sidebar links, and get report ids
	ReportsService.getReportsConfig(function(data){
		$scope.reports = data.reports;
		$route.reload();
	});

})

;