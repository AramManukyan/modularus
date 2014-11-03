sbAdmin.common

.directive('chartMovingLine', function(chartsService) {

  function link(scope) {

      var container = $("#flot-moving-line-chart");

      // Determine how many data points to keep based on the placeholder's initial size;
      // this gives us a nice high-res plot while avoiding more than one point per pixel.

      var maximum = container.outerWidth() / 2 || 300;

      var series = [{
        data: chartsService.getRandom(maximum),
        lines: {
            fill: true
        }
      }];

      //

      var plot = $.plot(container, series, {
      grid: {
          borderWidth: 1,
          minBorderMargin: 20,
          labelMargin: 10,
          backgroundColor: {
              colors: ["#fff", "#e4f4f4"]
          },
          margin: {
              top: 8,
              bottom: 20,
              left: 20
          },
          markings: function(axes) {
              var markings = [];
              var xaxis = axes.xaxis;
              for (var x = Math.floor(xaxis.min); x < xaxis.max; x += xaxis.tickSize * 2) {
                  markings.push({
                      xaxis: {
                          from: x,
                          to: x + xaxis.tickSize
                      },
                      color: "rgba(232, 232, 255, 0.2)"
                  });
              }
              return markings;
          }
      },
      xaxis: {
          tickFormatter: function() {
              return "";
          }
      },
      yaxis: {
          min: 0,
          max: 110
      },
      legend: {
          show: true
      }
      });

      // Update the random dataset at 25FPS for a smoothly-animating chart

      setInterval(function updateRandom() {
        series[0].data = chartsService.getRandom(maximum);
        plot.setData(series);
        plot.draw();
      }, 40);

  }

  // Return directive configuration.
  return({
    link: link,
    restrict: "AE",
  });

})

;