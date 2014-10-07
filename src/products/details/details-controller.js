exampleApp.products 

.controller('ProductDetailCtrl',function($scope, $http, $routeParams, productDetailsService){
	
	$scope.product = {};
	$scope.activeTab = "description";
	

	productDetailsService.get($routeParams.productId, function(data) {
		$scope.product = data;
		$scope.mainImage = data.images[0];
	});
	
	$scope.setImage = function(image){
		$scope.mainImage  = image;
	};
	
	$scope.setTab = function(tab){
		$scope.activeTab  = tab;
	};
	
	$scope.isActiveTab = function(tab){
		return $scope.activeTab  === tab;
	};
	
});