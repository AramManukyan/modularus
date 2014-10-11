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

	function getReportById(id,callback){
		$http.get('/assets/data/' + id + '.json').success(function(data){

			callback(data);
				
		}).error(function(){

			$log.log('Error');
			callback([]);

		});
	}

	return {
		getReportsConfig:function(callback){
			getReports(callback);
		},
		getReportById:function(id,data){
			return getReportById(id,data);
		}
	}
});