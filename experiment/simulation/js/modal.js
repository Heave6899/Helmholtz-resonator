var modal = document.getElementById("myModal");


var span = document.getElementsByClassName("close")[0];

function ques1() {
    var modal = document.getElementById("myModal");


var span = document.getElementsByClassName("close")[0];
  modal.style.display = "block";
}
function question2() {
  var modal = document.getElementById("myModal2");


var span = document.getElementsByClassName("close")[0];
modal.style.display = "block";
}
function question3() {
  var modal = document.getElementById("myModal3 ");
  var span = document.getElementsByClassName("close")[0];
  modal.style.display = "block";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    var modal = document.getElementById("myModal");


var span = document.getElementsByClassName("close")[0];

  if (event.target == modal) {
    modal.style.display = "none";
  }
}