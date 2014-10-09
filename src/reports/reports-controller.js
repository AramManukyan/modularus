exampleApp.reports

.controller("ReportsCtrl", function($scope, $log, ReportsService) {

	$scope.reports = [];

	ReportsService.get(function(data){
		$scope.reports = data.reports;
		$log.log($scope.reports);
	});

	$scope.out = function(param){
		$log.log(param);
	}

	$log.log("In reports controller");
});