exampleApp.reports

.controller("ReportsCtrl", function($scope, $log, ReportsService,$routeParams) {

	$scope.reports = [];
	$scope.activeTab = 0;
	
	if(typeof $routeParams.reportId === "undefined"){
		$routeParams.reportId = "report-1";
	}

	ReportsService.get(function(data){

		$scope.reports = data.reports;
		
		$scope.report = ReportsService.getById($routeParams.reportId,data.reports);
	});



	$scope.isActiveTab = function(index){
		return index === $scope.activeTab;
	}

	$scope.setTab = function(index){
		$scope.activeTab = index;
	}

});