exampleApp.reports

.controller("ReportsCtrl", function($scope, $log, ReportsService,$routeParams) {

	$scope.reports = [];
	$scope.activeTab = 0;

	ReportsService.get(function(data){

		$scope.reports = data.reports;

		if(typeof $routeParams.reportId === "undefined"){
			$routeParams.reportId = "0";
		}
		$scope.report = data.reports[$routeParams.reportId];
	});

	$scope.isActiveTab = function(index){
		return index === $scope.activeTab;
	}

	$scope.setTab = function(index){
		$scope.activeTab = index;
	}

});