exampleApp.reports

.factory("ReportsService", function($http,$log) {

	function getReports(callback){
		$http.get('/assets/data/dashboard-config.json').success(function(data){

			callback(data);
				
		}).error(function(){

			$log.log('Error');
			callback([]);

		});

	}

	return {
		get:function(callback){
			getReports(callback);
		}
	}
});