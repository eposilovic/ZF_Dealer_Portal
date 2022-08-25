/*var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}*/


$(".accordion").on("click", function() {      
  $(this).toggleClass("active").next(".panel").slideToggle("500").siblings(".panel").slideUp();
  $(this).siblings().removeClass("active");
  $(this).siblings().children('.fa-chevron-down').removeClass("arrow_rotate");
  $(this).children(".fa-chevron-down").css("transition", ".5s").toggleClass("arrow_rotate");
});