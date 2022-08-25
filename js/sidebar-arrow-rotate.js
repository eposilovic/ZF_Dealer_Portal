$(".dropdown-btn, .drop1").on("click", function(){
    $(this).find(".fa-chevron-down").css("transition", ".5s").toggleClass("arrow_rotate");      
    $(this).siblings().children('.fa-chevron-down').removeClass("arrow_rotate");  
})

$(".dropdown-btn").on("click", function(){
    if($(".drop1").find(".fa-caret-down ").hasClass("arrow_rotate"))
    $(".drop1").find(".fa-caret-down ").removeClass("arrow_rotate");
});
$(".dropdown-btn, .drop1").on("click", function(){
    $(this).find(".fa-caret-down").css("transition", ".5s").toggleClass("arrow_rotate");             
    $(this).siblings().children('.fa-caret-down').removeClass("arrow_rotate");      
});

$(".dropdown-btn").on("click", function(){
    if($(".drop1").find(".fa-chevron-down ").hasClass("arrow_rotate"))
    $(".drop1").find(".fa-chevron-down ").removeClass("arrow_rotate");
})




/*$(".dropdown-btn").on("click", function(){
    $(this).find(".fa-caret-down").css("transition", ".5s").toggleClass("arrow_rotate");
                                       
})

$(".accordion").on("click", function(){
 
    $(this).find(".fa-chevron-down").css("transition", ".5s").toggleClass("arrow_rotate");
                                 
})*/




