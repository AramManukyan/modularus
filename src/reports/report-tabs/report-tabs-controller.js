exampleApp.reports

.controller("ReportTabsCtrl", function($scope, $log, $routeParams, ReportsService) {

	$scope.activeTab = 0;

	$scope.isActiveTab = function(index){
		return index === $scope.activeTab;
	};

	$scope.setTab = function(index){
		$scope.activeTab = index;
	};

});