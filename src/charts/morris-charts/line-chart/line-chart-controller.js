sbAdmin.charts

.controller("ChartsLineChartCtrl", function(chartsService) {

	var vm = this;

	chartsService.get("line", function(data) {
		vm.data = data;
	});

});