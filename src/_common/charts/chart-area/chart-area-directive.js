sbAdmin.common

.directive('chartArea', function($log) {

  function link(scope) {

    scope.$watch("data", function() {

      if(!angular.isObject(scope.data)) {
        return false;
      }


      initChart();
      
    });

    function initChart() {
      Morris.Area({
          element: 'morris-area-chart',
          data: scope.data.data,
          xkey: scope.data.xkey,
          ykeys: scope.data.ykeys,
          labels: scope.data.labels,
          pointSize: 2,
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