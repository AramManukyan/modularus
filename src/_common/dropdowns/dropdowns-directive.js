sbAdmin.common

.directive('dropdownsInit', function($log, $document) {


  function link(scope, $element) {

    $(document).on("click", function(e) {

      var $dropdownToggle = $(e.target).closest(".dropdown-toggle");

      if($dropdownToggle.length) {
        var $dropdowns = $element.find(".dropdown");
        var $dropdownLists = $dropdowns.find("> ul");
        $dropdowns.not($dropdownToggle.parent()).filter(".open").removeClass("open");
        $dropdownToggle.parent().toggleClass("open");
      }

    });

    $(document).on("click", function(event) {

      if(!$(event.target).hasClass("dropdown-toggle")) { //&& $dropdowns
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