sbAdmin.common

.factory('chartService', function($http,$log) {

	function getCharts(type, callback) {

		$http.get('assets/data/chart-' + type + '.json').success(function(data){

			callback(data);
			
		}).error(function(){

			$log.log('Error');
			callback([]);

		});

	}

	return {
		get: function(type, callback) {
			getCharts(type, callback);
		}
	}
});