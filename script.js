function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//
let buttonChange = document.getElementById("changeBtn");

function changeSection() {
  let jsSection = document.getElementById('javascript');
    jsSection.classList.toggle('javascript-active');

}
buttonChange.addEventListener("click", changeSection);
