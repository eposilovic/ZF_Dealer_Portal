var slider = document.getElementById("myRange");
var discount = document.getElementById("discount");
var output = document.getElementById("spent");


output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  discount.innerHTML = this.value/1000;
}

