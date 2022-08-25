$(".view_order_btn").click(function (e) {
    e.preventDefault();
    $(".order-popup").fadeIn(300);
});

$('.order-popup').on('click', function(e) {
    if(e.target == $(this)[0]) {
        $(".order-popup").fadeOut(100);
    }
  });

$(".order-popup-close-icon, .button-no").click(function(){
    $(".order-popup").fadeOut(100);
});

$(".button-yes").click(function(){
    $(".order-popup").fadeOut(1000);
    $(".order-submitted-popup").fadeIn(3000);
    $(".product-list, .view_order_btn_wrap, h1, .breadcrumb-section").fadeOut(3000);
});