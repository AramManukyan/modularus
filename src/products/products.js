exampleApp.products

.controller('ProductsCtrl',function($scope,$http,paginationConfig){
	$scope.products = [];
	$scope.orderOpt = 'age';
	$http.get('phones/phones.json').success(function(data){
		$scope.products = data;
		$scope.totalItems = data.length;
		$scope.currentPage = 1;
		
		$scope.setPage = function () {
			var offset = ($scope.currentPage - 1) * paginationConfig.itemsPerPage;
			var limit  = offset + paginationConfig.itemsPerPage ;
			$scope.products = data.slice( offset , limit );
		};
		$scope.$watch( 'currentPage', $scope.setPage );
	}).error(function(){
		console.log('Error');
	});
	
	
});
