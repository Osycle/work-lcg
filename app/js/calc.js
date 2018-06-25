"use strict";

// external js: jquery.js

(function() {
  $(function() {
    var calcWrapper =   $(".calculate");
    var type =          $(".calc-type");
    var diameter =      $(".calc-diameter");
    var price =         $(".calc-price");
    var length =        $(".calc-length");
    var cost =          $(".calc-cost");


    calcWrapper.find(".calc-select").on("change", function(){
      var self = $(this);
      var selectVal = self.val();
      var optionText  = self.find("[value='"+selectVal+"']").text()

      //console.log(self)
      type.text(optionText);
      diameter.text(selectVal);

      console.log( selectVal );
    })

  });
})(jQuery);
