exampleApp.reports

.directive('datalist', function($log) {

	return{
		restrict: 'EA',
		templateUrl: 'templates/reports/widgets/datalist/datalist.html',
		link: function(scope, element) {

			// $log.log("in datalist directive", scope);

		},
		scope: {
			data: '=data'
		}
	}

})