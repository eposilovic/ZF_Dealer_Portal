$(".dealer-product-image img").click(function(){
    $(this).toggleClass("zoom_img");
    $(this).parent().parent().siblings().find(".zoom_img").removeClass("zoom_img");
});

