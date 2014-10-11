exampleApp.reports

.controller('DatagridCtrl', function($scope, $log) {

	// By default order by first column
	$scope.orderByIndex = 0;

	// In ASC order
	$scope.orderReverse = false;


	// Set ordering column index
	$scope.orderBy = function(index) {

		// If is clcked to new field, we should set order index
		// and set order ASC
		if($scope.orderByIndex != index) {
			$scope.orderByIndex = index;
			$scope.orderReverse = false;
		}
		// Just toggle order ASC/DESC
		else {
			$scope.orderReverse = !$scope.orderReverse;
		}

	};


	// Rows sorting function, which is used in orderBy filter
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
	*	Search stuff
	*/
	$scope.search = {};

	/*
	*	Pagination stuff
	*/

	$scope.activePage = 0;
	$scope.itemsPerPage = 5;


})

;