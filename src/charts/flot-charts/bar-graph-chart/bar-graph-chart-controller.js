sbAdmin.charts

.controller("ChartsBarGraphChartCtrl", function(chartsService) {

	var vm = this;

	chartsService.get("bar-graph", function(data) {
		vm.data = data;
	});

});