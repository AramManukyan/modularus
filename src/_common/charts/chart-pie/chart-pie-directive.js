sbAdmin.common

.directive('chartPie', function($log) {

  var link = function (scope) {
    
    scope.$watch("data", function() {

      if(!angular.isObject(scope.data)) {
        return false;
      }

      initChart();
      
    });

    function initChart() {
      var plotObj = $.plot($("#flot-pie-chart"), scope.data.data, {
        series: {
            pie: {
                show: true
            }
        },
        grid: {
            hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
            shifts: {
                x: 20,
                y: 0
            },
            defaultTheme: false
        }
      });
    }
      
  }

   

  // Return directive configuration.
  return({
    link: link,
    restrict: "EA",
    scope:{
      data: "=chartData"
    }
  });

});