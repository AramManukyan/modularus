exampleApp.reports

.controller("ReportsCtrl", function($scope, $log, $routeParams, $timeout, ReportsService, $location) {

	// If report configs are not accesable yet
	// Don't continue
	if(!$scope.reports.length) {
		$log.log("report configs are not accesable yet");
		return false;
	}

	// If reports configuration is already loaded, but report ID is not defined
	// We should set the first report as active
	if(!angular.isDefined($routeParams.reportId)) {
		$location.path('/reports/' + $scope.reports[0].id);

		// Reports controller will be reloaded, so don't continue from this point
		return false;
	}
	// Else if is set report ID
	else {
		$scope.activeReport = $routeParams.reportId;	
	}
	
	$scope.report = [];

	ReportsService.getReportById($scope.activeReport, function(data){
		$scope.report = data;
	});

});