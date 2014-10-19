exampleApp.reports

.controller("ReportSingleCtrl", function($scope, $log) {

	if(!angular.isDefined($scope.report) || !$scope.report.data.length) {
		return false;
	}

	if( !angular.isDefined($scope.reportItem) ) {
		$scope.reportItem = $scope.report.data[0];
	}

	// $scope.activeTab = 0;

	// $scope.isActiveTab = function(index){
	// 	return index === $scope.activeTab;
	// };

	// $scope.setTab = function(index){
	// 	$scope.activeTab = index;
	// };

});