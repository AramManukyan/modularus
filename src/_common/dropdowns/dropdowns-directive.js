sbAdmin.common

.directive('dropdownsInit', function($log, $document) {

  var $dropdowns = null,
      $dropdownLists = null;

  function link(scope, $element) {

    $(document).on("click", function(e) {

      var $dropdownToggle = $(e.target).closest(".dropdown-toggle");

      if($dropdownToggle.length) {
        $dropdowns = $element.find(".dropdown");
        $dropdownLists = $dropdowns.find("> ul");

        $dropdowns.not($dropdownToggle.parent()).filter(".open").removeClass("open");
        $dropdownToggle.parent().toggleClass("open");
      }

    });

    $(document).on("click", function(e) {

      if(!$(e.target).closest(".dropdown-toggle").length) { //&& $dropdowns
        $(".dropdown").filter(".open").removeClass("open");
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