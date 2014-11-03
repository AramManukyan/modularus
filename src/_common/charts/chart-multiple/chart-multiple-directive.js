sbAdmin.common

.directive('chartMultiple', function($log) {

  function link(scope) {

    scope.$watch("data", function() {

      if(!angular.isObject(scope.data)) {
        return false;
      }

      initChart();
      
    });

    function initChart() {
      
      function doPlot(position) {
          $.plot($("#flot-multiple-axes-chart"), [{
              data: scope.data.data.oilprices,
              label: "Oil price ($)"
          }, {
              data: scope.data.data.exchangerates,
              label: "USD/EUR exchange rate",
              yaxis: 2
          }], {
              xaxes: [{
                  mode: 'time'
              }],
              yaxes: [{
                  min: 0
              }, {
                  // align if we are to the right
                  alignTicksWithAxis: position == "right" ? 1 : null,
                  position: position,
                  tickFormatter: euroFormatter
              }],
              legend: {
                  position: 'sw'
              },
              grid: {
                  hoverable: true //IMPORTANT! this is needed for tooltip to work
              },
              tooltip: true,
              tooltipOpts: {
                  content: "%s for %x was %y",
                  xDateFormat: "%y-%0m-%0d",

                  onHover: function(flotItem, $tooltipEl) {
                      // console.log(flotItem, $tooltipEl);
                  }
              }

          });
        }

        function euroFormatter(v, axis) {
          return v.toFixed(axis.tickDecimals) + "€";
        }

        doPlot("right");

        $("button").click(function() {
            doPlot($(this).text());
        });
    }

  }

  // Return directive configuration.
  return({
    link: link,
    restrict: "AE",
    scope:{
      data: "=chartData"
    }
  });

})

;