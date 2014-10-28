sbAdmin.common

.directive('dropdownsInit', function($log, $document) {


  function link(scope, $element) {

    var $dropdowns = null,
        $dropdownLists = null;

    $(document).on("click", function(e) {

      var $dropdownToggle = $(e.target).closest(".dropdown-toggle");

      if(!$dropdownToggle.length) {
        return false;
      }

      $dropdowns = $element.find(".dropdown");
      $dropdownLists = $dropdowns.find("> ul");

      $dropdowns.not($dropdownToggle.parent()).filter(".open").removeClass("open");
      $dropdownToggle.parent().toggleClass("open");

    });
    
    // $dropdowns.find(".dropdown-toggle").click(function() {

    //   $dropdowns.not($(this).parent()).filter(".open").removeClass("open");
    //   $(this).parent().toggleClass("open");

    //   return false;

    // });

    $(document).on("click", function(event) {


      if(!$(event.target).hasClass("dropdown-toggle") && $dropdowns) {

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