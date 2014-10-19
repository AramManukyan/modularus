exampleApp.reports

.factory("ReportsService", function($http, $log, $timeout) {

	function getReportsConfig(callback){

		$http.get('assets/data/dashboard-config.json').success(function(data){

			callback(data);
				
		}).error(function(){

			$log.log('Error');
			callback([]);

		});

	}

	function getReportById(id, callback){

		$http.get('assets/data/' + id + '.json').success(function(data){

			callback(data);
				
		}).error(function(){

			$log.log('Error');
			callback([]);

		});

	}

	return {
		getReportsConfig: function(callback) {

			// Imitating async request with delay
			$timeout(function() {

				getReportsConfig(callback);
				
			});

		},
		getReportById: function(id, callback) {

			// Imitating async request with delay
			$timeout(function() {

				getReportById(id, callback);

			});
			
		}
	}
});