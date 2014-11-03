sbAdmin.common

.factory('headerService', function($http,$log) {

	function getNots(callback) {

		$http.get('assets/data/notes.json').success(function(data){

			callback(data);
			
		}).error(function(){

			$log.log('Error');
			callback([]);

		});

	}

	
	return {
		get: function(callback) {
			getNots(callback);
		}
	}
});