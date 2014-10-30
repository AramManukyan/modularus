sbAdmin.common

.directive('chartDonut', function($log, $document) {

  function link(scope, $element) {

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });


  }

  // Return directive configuration.
  return({
    link: link,
    restrict: "A"
  });

})

;