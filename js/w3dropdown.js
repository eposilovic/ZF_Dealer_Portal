  $(function() {
    $(".dropbtn").off("click").on("click", function(e){
       e.preventDefault();
      e.stopPropagation();
      $(".dropdown-content").slideToggle(500,"linear");
      $(".order_dropdown_content").slideUp(".dropdown-content");
    })
    $(".order_drop").off("click").on("click", function(e){
      e.preventDefault();
      e.stopPropagation();
      $(".order_dropdown_content").slideToggle(500,"linear");
      $(".dropdown-content").slideUp(".order_dropdown_content");
    })
    $(".content").on("click", function(){
      $(".order_dropdown_content").slideUp(".dropdown-content");
      $(".dropdown-content").slideUp(".order_dropdown_content");
    })
    });

  
    