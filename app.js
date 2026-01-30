setTimeout(() => {
  document.getElementById("loading").style.display = "none";
  document.getElementById("main").style.display = "block";
}, 10000);

let isWhite = false;

function toggleMode() {
  if (isWhite) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "#757171";
  }
  isWhite = !isWhite;
};

function toggleSidebar() {
  document.querySelector('body').classList.toggle("open")
}