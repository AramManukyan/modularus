exampleApp.main

.directive('dropdownsInit', function($log) {


  function link(scope, $element) {

    var $dropdowns = $element.find(".dropdown");
    var $dropdownLists = $dropdowns.find("> ul");
    
    $dropdowns.find(".dropdown-toggle").click(function() {

      $dropdowns.not($(this).parent()).filter(".open").removeClass("open");
      $(this).parent().toggleClass("open");

      return false;

    });

    $(document).on("click", function(event) {


      if(!$(event.target).hasClass("dropdown-toggle")) {

        $dropdowns.filter(".open").removeClass("open");

      }

    });

  }

  // Return directive configuration.
  return({
    link: link,
    restrict: "A"
  });

})

;