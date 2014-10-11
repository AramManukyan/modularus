exampleApp.reports

.directive('chartLine', function($log) {

	var link = function(scope, element) {

		var data = scope.data;

		$log.log("In chart line", data);


		nv.addGraph(function() {

			var chart = nv.models.lineChart()
				  .x(function(d) { return d.label })
				  .y(function(d) { return d.value })
				  .showLabels(true)     //Display pie labels
				  .labelThreshold(.05)  //Configure the minimum slice size for labels to show up
				  .labelType("percent") //Configure what type of data to show in the label. Can be "key", "value" or "percent"
				  .donut(true)          //Turn on Donut mode. Makes pie chart look tasty!
				  .donutRatio(0.35)     //Configure how big you want the donut hole size to be.
				  ;

			d3.select(element[0])
				.append('svg')
			    .datum(data)
			    .transition().duration(350)
			    .call(chart);

			nv.utils.windowResize(function(){
				chart.update();
			});

			return chart;
		});
		
	};

	return{
		restrict:'EA',
		// controller:'LinechartCtrl',
		link: link,
		scope:{
			data: "=data"
		}
	}
})