$('.search-user').blur(function()
{
    if($(this).val() !== "" ) {
          $(".form-label").css("opacity", "0");
    }
    else{
        $(".form-label").css("opacity", "1");
    }
});

$(".search-user").focus(function(){
    $(".form-label").css({"opacity":"0",
"transition":".5s"});
});

