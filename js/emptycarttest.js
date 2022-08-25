$(document).on('click', '.delete_cart_item', function (event) {  
    var test = $("<li class='empty_cart_txt'>Narudžba je prazna</li>").hide().fadeIn("slow", "linear");
    if($(".order_dropdown_content ul li").length < 3){
        $(".finish_order").addClass("empty_order_button");
        $(".order_dropdown_total").fadeOut("slow", "linear");
        $(".empty_cart_txt").show();
        $(".order_dropdown_content ul h5").append(test);
        $(".link a").removeAttr("href");
    }
       $(this).each(function () {  
       $(this).parent().parent().parent().css("color", "red").fadeOut("slow", "linear", function(){;
       $(this).remove();  
        });
    });
});