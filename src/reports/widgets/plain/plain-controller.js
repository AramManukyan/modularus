exampleApp.widgets

.controller("PlainCtrl", function($scope,$log,$parse) {


	var data = $parse($scope.plainData)($scope.plainData);
		nv.addGraph(function() {
		var chart = nv.models.discreteBarChart()
		.x(function(d) { return d.label })    //Specify the data accessors.
		.y(function(d) { return d.value })
		.staggerLabels(true)    //Too many bars and not enough room? Try staggering labels.
		.tooltips(false)        //Don't show tooltips
		.showValues(true)       //...instead, show the bar value right on top of each bar.
		.transitionDuration(450)
		;

		d3.select('#plain').append('svg')
		.datum(data)
		.call(chart);

		nv.utils.windowResize(function(){
		chart.update();
		});

		return chart;
	});
});