sbAdmin.common

.directive('flotChartLine', function($log) {

  function link(scope) {

      

      function plot() {
            alert(1);
          var sin = [],
              cos = [];
          for (var i = 0; i < 12; i += 0.2) {
              sin.push([i, Math.sin(i + offset)]);
              cos.push([i, Math.cos(i + offset)]);
          }

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
                  data: sin,
                  label: "sin(x)"
              }, {
                  data: cos,
                  label: "cos(x)"
              }],
              options);
      }
          
      var offset = 0;
      plot();
  }

  // Return directive configuration.
  return({
    link: link,
    restrict: "A"
  });

})

;