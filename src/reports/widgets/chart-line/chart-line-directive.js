exampleApp.reports

.directive('chartLine', function($log) {

	var link = function(scope, element) {

		var data = scope.data;

		$log.log("In chart line", data);


		nv.addGraph(function() {
		var chart = nv.models.lineChart()
		    .margin({left: 100})  //Adjust chart margins to give the x-axis some breathing room.
		    .useInteractiveGuideline(true)  //We want nice looking tooltips and a guideline!
		    .transitionDuration(350)  //how fast do you want the lines to transition?
		    .showLegend(true)       //Show the legend, allowing users to turn on/off line series.
		    .showYAxis(true)        //Show the y-axis
		    .showXAxis(true)        //Show the x-axis
		;

		chart.xAxis     //Chart x-axis settings
		.axisLabel('Time (ms)')
		.tickFormat(d3.format(',r'));

		chart.yAxis     //Chart y-axis settings
		.axisLabel('Voltage (v)')
		.tickFormat(d3.format('.02f'));

		d3.select(element[0])
		.append('svg')    //Append the <svg> element you want to render the chart in.   
		.datum(data)         //Populate the <svg> element with chart data...
		.call(chart);          //Finally, render the chart!

		//Update the chart when window resizes.
		nv.utils.windowResize(function() { chart.update() });

		return chart;
		
		});

	};

	return{
		restrict:'EA',
		link: link,
		scope:{
			data: "=data"
		}
	}
})