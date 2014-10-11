exampleApp.reports

.controller('DatagridCtrl', function($scope, $log, $filter) {

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

	setPagination();


	$scope.setPage = function(pageNumber) {
		$scope.activePage = pageNumber;
	};

	$scope.$watch("search", function() {
		setPagination();
	}, true);

	// Init pagination
	function setPagination() {
		$scope.activePage = 1;
		$scope.itemsPerPage = 5;
		$scope.itemsCount = $filter('filter')($scope.data.rows, $scope.search).length;
		$scope.numPages = Math.ceil($scope.itemsCount / $scope.itemsPerPage);

		$log.log("Items count:", $scope.itemsCount);

		$scope.pages = [];

		for(var i = 1; i <= $scope.numPages; i++) {
			$scope.pages.push(i);
		}
	}


})

;