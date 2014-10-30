sbAdmin.charts

.controller("ChartsAreaChartCtrl", function(chartsService) {

	var vm = this;

	chartsService.get("area", function(data) {
		vm.data = data;
	});

});