exampleApp.products

.factory('productsService',function($http){

	// var products = [];
	// var orderOpt = 'age';


	function getProducts(type, callback) {

		$http.get('assets/phones_data/phones.json').success(function(data){

			callback(data);
				
			// $scope.products = data;
			// $scope.totalItems = data.length;
			// $scope.currentPage = 1;
			
			// $scope.setPage = function () {
			// 	var offset = ($scope.currentPage - 1) * paginationConfig.itemsPerPage;
			// 	var limit  = offset + paginationConfig.itemsPerPage ;
			// 	$scope.products = data.slice( offset , limit );
			// };
			// $scope.$watch( 'currentPage', $scope.setPage );

		}).error(function(){

			console.log('Error');
			callback([]);

		});

	}


	


	return {
		get: function(type, callback) {
			getProducts(type, callback);
		}
	}
	
	
});
