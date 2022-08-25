$(".order_button").one("click", function(){
    $(".finish_order").removeClass("empty_order_button");
    $(".empty_cart_txt").remove(".empty_cart_txt");
});



$(".order_button").click(function(){
    $(this).each(function () {

        var nametest = $(this).parent().parent().find(".product_title").text();
        var pricetest = $(this).parent().parent().find(".discount-price").text();
        var widthtest = $(this).parent().parent().find(".width").val();
        var heighttest = $(this).parent().parent().find(".height").val();


$(".order_dropdown_content ul h5").append("<li><div><div class='newtestclass2'><h6>" + nametest + "</h6><h6 class='dropdown_price'>" + pricetest +"</h6><span class='delete_cart_item'><i class='fa fa-trash' aria-hidden='true'></i></span></div><div class='newtestclass'><p class='prod_width'>" + widthtest + "cm" + "</p> <p>" + heighttest + "cm" + "</p><p>" + " Količina : 1" + "</p></div></div></li>");
    });
});



(".delete_cart_page_item").on("click", function(){
    var number_in_cart = parent_li.parent().parent().parent().parent().find('.show-orders').text().slice().replace('(', '').replace(')', '');
    //console.log(number_in_cart);
if(number_in_cart == 0){
   $(".order_dropdown_content ul li, .finish_order").fadeOut();
   $(".finish_order").addClass("empty_order_button");
   $(".empty_cart_txt").fadeIn();
  }); 

