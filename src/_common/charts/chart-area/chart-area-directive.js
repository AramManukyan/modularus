sbAdmin.common

.directive('chartArea', function($log, chartService) {

  function link(scope) {

    chartService.get('area',function(data){

        Morris.Area({
            element: 'morris-area-chart',
            data: data.data,
            xkey: data.xkey,
            ykeys: data.ykeys,
            labels: data.labels,
            pointSize: 2,
            hideHover: 'auto',
            resize: true
        });

    })
    

  }

  // Return directive configuration.
  return({
    link: link,
    restrict: "A"
  });

})

;