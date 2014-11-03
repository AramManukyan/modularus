sbAdmin.common

.directive('chartLine', function($log) {

  function link(scope) {

    scope.$watch("data", function() {

      if(!angular.isObject(scope.data)) {
        return false;
      }


      initChart();
      
    });

    function initChart() {
      Morris.Line({
          element: 'morris-line-chart',
          data: scope.data.data,
          xkey: 'd',
          ykeys: ['visits'],
          labels: ['Visits'],
          smooth: false,
          resize: true
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