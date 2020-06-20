
var acc = document.getElementsByClassName("FAQ__quest");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var answer = this.nextElementSibling;
    if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
    } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
    } 
  });
}

$(document).ready(function(){
  $('.features-feedback').slick({});
});