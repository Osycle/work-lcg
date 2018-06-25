"use strict";

// external js: jquery.js

(function() {
  $(function() {
    var calcWrapper = $(".calculate");
    calcWrapper.find(".calc-select").on("change", function(){
      var self = this;
      var selectVal = self.value;

      var type =      $(".calc-type");
      var diameter =  $(".calc-diameter");
      var price =     $(".calc-price");
      var length =    $(".calc-length");
      var cost =      $(".calc-cost");

      console.log( selectVal );
    })

  });
})(jQuery);
