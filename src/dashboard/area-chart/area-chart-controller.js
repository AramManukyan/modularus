sbAdmin.dashboard

.controller("DashboardsAreaChartCtrl", function(chartsService) {

	var vm = this;

	chartsService.get("area", function(data) {
		vm.data = data;
	});

});