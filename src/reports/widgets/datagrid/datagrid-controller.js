exampleApp.reports

.controller('DatagridCtrl', function($scope, $log) {

	// By default order by first column
	$scope.orderByIndex = 0;

	// In ASC order
	$scope.orderReverse = false;


	// Set ordering column index
	$scope.orderBy = function(index) {
		$scope.orderByIndex = index;
	};


	// Raws sorting function, which is used in orderBy filter
	$scope.rowSortFunction = function(row) {

		var orderValue = row[$scope.orderByIndex];
		var orderType = $scope.data.fields[$scope.orderByIndex].type;

		if(orderType == "date") {
			return new Date(orderValue);
		}
		else {
			return row[$scope.orderByIndex];
		}
	};

	/*
	*	Pagination stuff
	*/

	$scope.activePage = 0;
	$scope.itemsPerPage = 5;


})

;