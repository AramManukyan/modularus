sbAdmin.common

.directive('chartLine', function($log) {

  function link(scope) {

    // chartService.get('line',function(data){

    //   Morris.Line({
    //       element: 'morris-line-chart',
    //       data: data.data,
    //       xkey: 'd',
    //       ykeys: ['visits'],
    //       labels: ['Visits'],
    //       smooth: false,
    //       resize: true
    //   });

    // })
    

  }

  // Return directive configuration.
  return({
    link: link,
    restrict: "A"
  });

})

;