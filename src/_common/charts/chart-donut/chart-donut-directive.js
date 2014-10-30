sbAdmin.common

.directive('chartDonut', function($log) {

  function link(scope) {

    // chartService.get('donut',function(data){

    //   Morris.Donut({

    //       element: 'morris-donut-chart',
    //       data: data.data,
    //       resize: true
          
    //   });

    // });


  }

  // Return directive configuration.
  return({
    link: link,
    restrict: "A"
  });

})

;