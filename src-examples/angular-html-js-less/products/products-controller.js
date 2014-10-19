exampleApp.products

.controller('ProductsCtrl',function($scope, $http, $log, productsService, paginationConfig){

	$scope.products = [];

	$scope.orderOpt = 'age';

	$scope.currentPage = 1;


	productsService.get("phones", function(data) {

		$scope.products = data;

		$scope.totalItems = data.length;

		$scope.setPage = function () {
			var offset = ($scope.currentPage - 1) * paginationConfig.itemsPerPage;
			var limit  = offset + paginationConfig.itemsPerPage ;
			$scope.products = data.slice( offset , limit );
		};
		
		$scope.$watch( 'currentPage', $scope.setPage );
	});


});
