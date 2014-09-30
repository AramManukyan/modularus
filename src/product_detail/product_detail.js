exampleApp.product_detail 

.controller('ProductDetailCtrl',function($scope,$http,$routeParams){
	
	$scope.product = {};
	$scope.product_review = {};
	$scope.activeTab = "description";
	$scope.stars = 1;
	
	$http.get('phones/'+$routeParams.productId+'.json').success(function(data){
		$scope.product = data;
		$scope.product.reviews = [];
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
	
	$scope.saveReview = function(){
		$scope.product_review.avatar = '/assets/' + ((($scope.product.reviews.length % 2) == 0)?'avatar_m.jpg':'avatar_w.jpg');
		$scope.product.reviews.push($scope.product_review);
		$scope.product_review = {};
	};
	
});

exampleApp.product_detail 
.filter('capitalize', function() {
    return function(input, all) {
      return (!!input) ? input.replace(/([^\W_]+[^\s-]*) */g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
    }
});

  
  