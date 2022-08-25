$(function() {
  $(".adduser").on("click", function(){
    $(".list-of-users:first-of-type").clone(true).find("input").val("").end().appendTo(".users-list-form");

  
  })
  $(".removeuser").on("click", function(){
    if($('.users-list-form>li').length > 1) {
    $(".users-list-form>li:last").remove();
  }
  })

  $(".addform").on("click", function(){
    $(".dodatne_info_forma:last").clone().addClass("cloned").find("input, textarea").val("").end().appendTo(".dodatne_info_box");
  })

  $(".addform").one("click", function(){
    $(".cloned p:first-of-type").remove();
  });
  
$(".removeform").on("click", function(){
  if($('.dodatne_info_forma').length > 1) {
    $(".dodatne_info_forma:last-of-type").remove();
    }
  })
 
});


$(".fa-address-book").on("click", function(){
  $(".dodatne_info").addClass("dodatne_info_show");   
})
  
$(".dodatne_info_close_icon").on("click", function(){
  $(".dodatne_info").removeClass("dodatne_info_show");
})   

$('.dodatne_info').on('click', function(e) {
  if(e.target == $(this)[0]) {
  $(this).removeClass('dodatne_info_show');
  }
});

$(".client-details").on("click", function(e){
  $(".client-overlay").fadeIn(200);
  $(".call-fail").hide();
  $(".call-success").show();
  $(".btn-success").addClass("active");
});
$(".dodatne_info_close .fa").on("click", function(){
  $(".client-overlay").fadeOut(200);
});
$('.client-overlay').on('click', function(e) {
  if(e.target == $(this)[0]) {
  $(this).fadeOut(200);}
});
$(".btn-success").on("click", function(){
  $(".call-fail").hide();
  $(".call-success").show();
  $(this).addClass("active");
  $(".btn-fail").removeClass("active");
});
$(".btn-fail").on("click", function(){
  $(".call-success").hide();
  $(".call-fail").show();
  $(this).addClass("active");
  $(".btn-success").removeClass("active");
});


$(".client-details-empty").on("click", function(){
  $(".client-overlay-empty").show();
});

$(".dodatne_info_close .fa").on("click", function(){
  $(".client-overlay-empty").fadeOut(200);
});

$('.client-overlay-empty').on('click', function(e) {
  if(e.target == $(this)[0]) {
  $(this).fadeOut(200);}
});



//-------------


