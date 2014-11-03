sbAdmin.charts

.controller("ChartsLineChartTooltipsCtrl", function(chartsService,$log) {

	var vm = this;

	chartsService.genData( 0, 12, 0.2, function(data) {

		vm.data = data;
		
	});

});