let theme1 = document.getElementById("theme1");
let theme2 = document.getElementById("theme2");

if (localStorage.color == "black" || !localStorage.color) {
  document.body.style.background = "black";
  document.querySelector("header").style.background = "black";
  theme1.style.display = "inline-block";
  theme2.style.display = "none";
  document.body.classList.remove("white");
  localStorage.color = "black";
} else {
  document.body.style.background = "white";
  document.querySelector("header").style.background = "white";
  theme1.style.display = "none";
  theme2.style.display = "inline-block";
  document.body.classList.add("white");
}
function settheme() {
  if (localStorage.color == "black") {
    localStorage.color = "white";
    document.body.style.background = "white";
    document.querySelector("header").style.background = "white";
    theme1.style.display = "none";
    theme2.style.display = "inline-block";
    document.body.classList.add("white");
  } else {
    localStorage.color = "black";
    document.body.style.background = "black";
    document.querySelector("header").style.background = "black";
    theme1.style.display = "inline-block";
    theme2.style.display = "none";
    document.body.classList.remove("white");
  }
}

theme1.onclick = settheme;
theme2.onclick = settheme;

onscroll = function () {
  let text = document.getElementById("show");
  if (pageYOffset > 1100) {
    text.classList.add("show");
  }
};
showw = function () {
  let word = document.getElementById("intro");
  setTimeout(function () {
    word.classList.add("intro2");
  }, 500);
};
showw();
var loggedIn = localStorage.getItem("loggedIn");
if (loggedIn) {
  var loginBtn = document.querySelector(".login");
  loginBtn.textContent = "Welcome, " + loggedIn;
}
