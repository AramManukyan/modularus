sbAdmin.common

.directive('chartDonut', function($log) {

  function link(scope) {

    scope.$watch("data", function() {

      if(!angular.isObject(scope.data)) {
        return false;
      }


      initChart();
      
    });

    function initChart() {
      Morris.Donut({

          element: 'morris-donut-chart',
          data: scope.data.data,
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