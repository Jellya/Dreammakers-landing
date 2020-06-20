
var acc = document.getElementsByClassName("FAQ__quest");
var but = document.getElementsByClassName("FAQ__button");
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

  but[0].addEventListener("click", function() {
  this.classList.toggle("active");
  var content = this.previousElementSibling;
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight =1000+content.scrollHeight + "px";
  } 
});


$(document).ready(function(){
  $('.features-feedback').slick({});
});