exampleApp.products 

.controller('ProductReviewCtrl',function($scope,$log){
	
	$scope.newreview = {};
	$scope.reviews = [];
	$scope.stars = 1;

	$scope.saveReview = function(){
		$scope.newreview.avatar = '/assets/' + ( ( ($scope.reviews.length % 2) == 0) ? 'avatar_m.jpg':'avatar_w.jpg');
		$scope.reviews.push($scope.newreview);
		$scope.newreview = {};
	};
	
});