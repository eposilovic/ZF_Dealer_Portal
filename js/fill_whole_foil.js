$("input.whole_foil").on("click", function () {

    if ($(this).is(':checked')){  

        $(this).closest("li").find("input.length").val('3050').prop("disabled", true).css({
        "background-color" : "#ececec", 
        "transition" : ".5s"});

        $(this).closest("li").find("input.foil_counter").fadeIn(".5s");

    }

    else{

        $(this).closest("li").find("input.length").val('').prop("disabled", false).css("background-color", "");

        $(this).closest("li").find("input.foil_counter").fadeOut(".5s");
    }
});

$('input.foil_counter').on('input', function () {
    
    var value = this.value;
    
    if (value !== '') {
        value = parseInt(value);
        
        if (value < 1)
            this.value = 1;
        else if (value > 10)
            this.value = 10;
    }
  
    
});