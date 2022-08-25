$(window).scroll(function(){
    if($(this).scrollTop() > 1300)
    {
        $("#to_top_button").fadeIn("500");
    }
    else
    {
        $("#to_top_button").fadeOut("500");
    }
})

$('#to_top_button').click(function(){
    $('html, body').animate({scrollTop : 0},500);
    return false;
});