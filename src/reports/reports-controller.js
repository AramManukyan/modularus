exampleApp.reports

.controller("ReportsCtrl", function($scope, $log, $routeParams, ReportsService) {

	$scope.activeTab = 0;
	$scope.activeReport = $routeParams.reportId;

	ReportsService.getReportById($routeParams.reportId,function(data){

		$scope.report = data;

	});

	$scope.isActiveTab = function(index){
		return index === $scope.activeTab;
	}

	$scope.setTab = function(index){
		$scope.activeTab = index;
	}

});