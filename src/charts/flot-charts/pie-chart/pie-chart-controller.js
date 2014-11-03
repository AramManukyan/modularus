sbAdmin.charts

.controller("ChartsPieChartCtrl", function(chartsService,$log) {

	var vm = this;

	chartsService.get("pie", function(data) {
		
		vm.data = data;
		
	});

});