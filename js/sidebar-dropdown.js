/*var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}*/


$(".dropdown-btn").click( function () { 
  /*if($(".fa-caret-down").hasClass("testclass1"))
  {
      $(".fa-caret-down").css("transition", ".5s").removeClass("testclass1");
  }
  else
  {
      $(this).find(".fa-caret-down").css("transition", ".5s").addClass("testclass1");
  }*/
  $(".dropdown-container").slideUp();
});

$(".dropdown-btn").click( function () {
    if($(this).next(".dropdown-container").css("display") == "none")
    {
      $(this).next(".dropdown-container").slideDown("100");
    }
    else
    {
      $(this).next(".dropdown-container").slideUp("100");
    }
});

$(".drop1").click( function () {
    if($(this).next(".dropdown-2nd-container").css("display") == "none")
    {
        $(this).next(".dropdown-2nd-container").slideDown("100");
    }
    else
    {
        $(this).next(".dropdown-2nd-container").slideUp("100");
    }
});

$(".dropdown-btn").click(function (){
  $(this).parent().find(".dropdown-2nd-container").slideUp("100");
});


/*LENTA ANIMACIJA*/
$(".dimensions1, .length").on("focus", function(){
  $(this).closest("li").find(".discount-label").addClass("discount-label-animation");
});

$(".dimensions1, .length").on("focusout", function(){
  $(this).closest("li").find(".discount-label").removeClass("discount-label-animation");
});
/*
$(".dimensions_new, .height").on("focus", function(){
  $(this).closest("li").find(".discount-label").addClass("discount-label-animation");
});

$(".dimensions_new, .height").on("focusout", function(){
  $(this).closest("li").find(".discount-label").removeClass("discount-label-animation");
});*/