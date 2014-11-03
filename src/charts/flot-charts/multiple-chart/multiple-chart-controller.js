sbAdmin.charts

.controller("ChartsMultipleChartCtrl", function(chartsService,$log) {

	var vm = this;

	chartsService.get("multiple", function(data) {
		
		vm.data = data;
		
	});

});