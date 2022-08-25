$(function() {
    $(".fa-bars")
      .on("click", function(){
      $(".sidenav").animate({width:'100vw'},600);
      $(".sidenav a, .dropdown-btn").css("display","block");
      $(".sidenav").css("background-color","#474b50");
      $(".sidenav").css("height","100%");
      $(".sidenav").css("z-index","10000");
      $(".sidenav").css("margin-top","0");
      $(".sidenav").css("overflow","auto");
      $(".fa-bars").fadeOut("slow");
      $(".fa-times").fadeIn("slow").css("display","block");
    })
    });

    $(function() {
        $(".fa-times")
          .on("click", function(){
            $(".sidenav").animate({width:'0'});
            $(".fa-bars").css("display","block");
            $(".fa-times").fadeOut("fast");
            $(".sidenav").css("overflow","hidden");
        })
        });
    
        