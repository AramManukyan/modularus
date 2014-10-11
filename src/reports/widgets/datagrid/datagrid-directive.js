exampleApp.reports

.directive('datagrid', function($log) {

	return{
		restrict: 'EA',
		templateUrl: 'templates/reports/widgets/datagrid/datagrid.html',
		controller: "DatagridCtrl",
		link: function(scope, element) {

			$log.log("in datagrid directive", scope);

		},
		scope: {
			data: '=data'
		}
	}

})