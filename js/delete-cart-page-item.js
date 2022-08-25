$(".delete_cart_page_item").on("click", function(){
    if ($(".cart-product-li").length > 2){
        $(this).closest("li").css("color", "red").fadeOut("slow", "linear", function(){
            $(this).remove();
        });
    }
    else{
        $(".product-list, .view_order_btn_wrap, h1, .breadcrumb-section").fadeOut(800, "linear", function(){
            $(this).remove();
            $(".empty-cart-prompt").fadeIn("linear");
        });
    }
});