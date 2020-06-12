const socket = io("http://localhost:8080");

var hand = document.querySelector("#hand");
var submit = document.querySelector("#submit");
hand.addEventListener("submit", function(e) {
  e.preventDefault();
});
submit.addEventListener("click", function() {
  if (submit.innerText == "Raise Hand") {
    submit.style.background = "orange";
    submit.innerText = "Hand Raised";
    socket.emit("raise-hand");
  } else {
    submit.style.background = "#1762A7";
    submit.innerText = "Raise Hand";
    socket.emit("hand-raised");
  }
});
