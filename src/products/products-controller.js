exampleApp.products

.controller('ProductsCtrl',function($scope, $http, $log, productsService, paginationConfig){

	$scope.products = [];

	$scope.orderOpt = 'age';

	$scope.currentPage = 1;


	productsService.get("phones", function(data) {

		$scope.products = data;
		$log.log(data);

	});


});
