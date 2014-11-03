sbAdmin.charts

.controller("ChartsBarChartCtrl", function(chartsService) {

	var vm = this;

	chartsService.get("bar", function(data) {
		vm.data = data;
	});

});