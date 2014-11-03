sbAdmin.common

.directive('chartBar', function($log) {

  function link(scope) {

    scope.$watch("data", function() {

      if(!angular.isObject(scope.data)) {
        return false;
      }


      initChart();
      
    });

    function initChart() {
      Morris.Bar({
        element: 'morris-bar-chart',
        data: scope.data.data,
        xkey: 'device',
        ykeys: ['geekbench'],
        labels: ['Geekbench'],
        barRatio: 0.4,
        xLabelAngle: 35,
        hideHover: 'auto',
        resize: true
      });
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