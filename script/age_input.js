let slider = document.getElementById("age");
let output = document.getElementById("age_label");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}