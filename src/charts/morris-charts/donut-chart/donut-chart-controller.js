sbAdmin.charts

.controller("ChartsDonutChartCtrl", function(chartsService) {

	var vm = this;

	chartsService.get("donut", function(data) {
		vm.data = data;
	});

});