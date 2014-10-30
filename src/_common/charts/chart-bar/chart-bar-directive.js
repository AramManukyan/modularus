sbAdmin.common

.directive('chartBar', function($log) {

  function link(scope) {

    // chartService.get('bar',function(data){

        // Morris.Bar({
        //   element: 'morris-bar-chart',
        //   data: data.data,
        //   xkey: 'device',
        //   ykeys: ['geekbench'],
        //   labels: ['Geekbench'],
        //   barRatio: 0.4,
        //   xLabelAngle: 35,
        //   hideHover: 'auto',
        //   resize: true
        // });

    // })
    

  }

  // Return directive configuration.
  return({
    link: link,
    restrict: "A"
  });

})

;