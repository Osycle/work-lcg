"use strict";

// external js: jquery.js

(function() {
  $(function() {

    var calcWrapper =             $(".calculate");

    var typeElSteel =             calcWrapper.find(".calc-steel .calc-type");
    var diameterElSteel =         calcWrapper.find(".calc-steel .calc-diameter");
    var priceElSteel =            calcWrapper.find(".calc-steel .calc-price");
    var lengthElSteel =           calcWrapper.find(".calc-steel .calc-length");
    var costElSteel =             calcWrapper.find(".calc-steel .calc-cost");

    var typeElBasalt =            calcWrapper.find(".calc-basalt .calc-type");
    var diameterElBasalt =        calcWrapper.find(".calc-basalt .calc-diameter");
    var priceElBasalt =           calcWrapper.find(".calc-basalt .calc-price");
    var lengthElBasalt =          calcWrapper.find(".calc-basalt .calc-length");
    var costElBasalt =            calcWrapper.find(".calc-basalt .calc-cost");

    var calcInputLength =         calcWrapper.find(".calc-input-length");

    var priceCurrentSteel;
    var priceCurrentBasalt;

    calcWrapper.find(".calc-select").on("change", function(event, typeSteel, typeBasalt){
      var self = $(this);
      if (typeSteel) 
        self.val(typeSteel).trigger("change"); 
      var selfOption =    self[0].selectedOptions;
      typeSteel =         typeSteel || self.val();
      typeBasalt =        $(selfOption).attr("data-basalt-type");
      var costSteel =     $(selfOption).attr("data-steel-cost");
      var costBasalt =    $(selfOption).attr("data-basalt-cost");
      var startlength =   $(selfOption).attr("data-startlength");

      setValues(typeSteel, typeBasalt, costSteel, costBasalt);
      calcInputLength.trigger("keyup", startlength);
    })
    
    calcInputLength.on("keyup", function(event, inputVal){
      var self = $(this);
      var selfVal = self.val()*1;
      if( selfVal < 0)
        return;
      if ( inputVal === undefined )
        inputVal = isNaN(selfVal) ? '0' : selfVal;
      else
        self.val( addSpaces(inputVal) );
        
      setCounterValues(inputVal);
    })

    calcWrapper.find(".calc-select").trigger( "change", "6" );


    function setValues(typeSteel, typeBasalt, costSteel, costBasalt){

      priceCurrentSteel = costSteel;
      typeElSteel.text( typeSteel+" A-III" );
      diameterElSteel.text(typeSteel);
      costElSteel.text( addSpaces(costSteel) );

      priceCurrentBasalt = costBasalt;
      typeElBasalt.text( typeBasalt+" АКБ" );
      diameterElBasalt.text(typeBasalt);
      costElBasalt.text( addSpaces(costBasalt) );

    }
    function setCounterValues( inputVal ){
      priceElSteel.text( addSpaces(inputVal * priceCurrentSteel) );
      lengthElSteel.text( addSpaces(inputVal) );
      priceElBasalt.text( addSpaces(inputVal * priceCurrentBasalt) );
      lengthElBasalt.text( addSpaces(inputVal) );
    }




  });
})(jQuery);

  // thousand separator
  function addSpaces(nStr){
      nStr = nStr+"";
      var remainder = nStr.length % 3;
    return (nStr.substr(0, remainder) + nStr.substr(remainder).replace(/(\d{3})/g, ' $1')).trim();
  }

  function bubbleCount(currentCnt){
    var total = 0;
    var ol = 0;
    for (var i = 0; i < 20; i++) {
      currentCnt = currentCnt * 0.75;
      ol += currentCnt;
      total++
      if( currentCnt < 1 )
        return total;
      //console.log(currentCnt, ol)
    }
  }