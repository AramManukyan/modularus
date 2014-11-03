sbAdmin.common

.directive('chartBarGraph', function($log) {

  function link(scope) {

    scope.$watch("data", function() {

      if(!angular.isObject(scope.data)) {
        return false;
      }

      initChart();
      
    });

    function initChart() {
      var barOptions = {
      series: {
          bars: {
              show: true,
              barWidth: 43200000
          }
      },
      xaxis: {
          mode: "time",
          timeformat: "%m/%d",
          minTickSize: [1, "day"]
      },
      grid: {
          hoverable: true
      },
      legend: {
          show: false
      },
      tooltip: true,
      tooltipOpts: {
          content: "x: %x, y: %y"
      }
      };
      
      $.plot($("#flot-bar-chart"), scope.data.data, barOptions);
    }

  }

  // Return directive configuration.
  return({
    link: link,
    restrict: "AE",
    scope: {
      data: "=chartData"
    }
  });

})

;