exampleApp.products

.factory('productDetailsService',function($http,$log){

	function getProducts(type, callback) {

		$http.get('assets/phones_data/' + type + '.json').success(function(data){

			callback(data);
			
		}).error(function(){

			$log.log('Error');
			callback([]);

		});

	}

	return {
		get: function(type, callback) {
			getProducts(type, callback);
		}
	}
	
	
});
