$(".delete_cart_item").on("click", function(){
    $(this).parent().parent().parent().css("color", "red").fadeOut("slow", "linear", function(){;
    $(this).remove();
  });
});