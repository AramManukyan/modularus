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

	function getReportById(id,data){
		for(var i = 0; i < data.length; i++) {
			if(data[i].id === id) {
				return data[i];
			}
		}
	}

	return {
		get:function(callback){
			getReports(callback);
		},
		getById:function(id,data){
			return getReportById(id,data);
		}
	}
});