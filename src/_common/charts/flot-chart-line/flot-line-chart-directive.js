sbAdmin.common

.directive('flotChartLine', function($log) {

  var link = function (scope) {

      var options = {
          series: {
              lines: {
                  show: true
              },
              points: {
                  show: true
              }
          },
          grid: {
              hoverable: true //IMPORTANT! this is needed for tooltip to work
          },
          yaxis: {
              min: -1.2,
              max: 1.2
          },
          tooltip: true,
          tooltipOpts: {
              content: "'%s' of %x.1 is %y.4",
              shifts: {
                  x: -60,
                  y: 25
              }
          }
      };

      var plotObj = $.plot($("#flot-line-chart"), [{
          data: scope.data.sin,
          label: "sin(x)"
      }, {
          data: scope.data.cos,
          label: "cos(x)"
      }],
      options);
      
  }

  // Return directive configuration.
  return({
    link: link,
    restrict: "EA",
    scope:{
      data: "=chartData"
    }
  });

})

;