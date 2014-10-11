exampleApp.main

.controller("MainCtrl", function($scope,$log, $routeParams, $location, ReportsService) {

	ReportsService.getReportsConfig(function(data){

		$scope.reports = data.reports;

		if(!angular.isDefined($routeParams.reportId)) {
			
			$scope.activeReport = $scope.reports[0].id;
			$location.path('/reports/' + $scope.reports[0].id);

		} 
		else {

			$scope.activeReport = $routeParams.reportId;
			
		}
	});


})

;