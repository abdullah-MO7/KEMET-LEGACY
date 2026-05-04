let theme1 = document.getElementById("theme1");
let theme2 = document.getElementById("theme2");

if (localStorage.color == "black" || !localStorage.color) {
  document.body.style.background = "black";
  document.querySelector("header").style.background = "black";
  document.querySelector("body").style.background = "black";
  document.querySelector("footer").style.background = "black";
  theme1.style.display = "inline-block";
  theme2.style.display = "none";
  document.body.classList.remove("white");
  localStorage.color = "black";
} else {
  document.body.style.background = "white";
  document.querySelector("header").style.background = "white";
  document.querySelector("body").style.background = "white";
  document.querySelector("footer").style.background = "white";
  theme1.style.display = "none";
  theme2.style.display = "inline-block";
  document.body.classList.add("white");
}
function settheme() {
  if (localStorage.color == "black") {
    localStorage.color = "white";
    document.body.style.background = "white";
    document.querySelector("header").style.background = "white";
    document.querySelector("body").style.background = "white";
    document.querySelector("footer").style.background = "white";
    theme1.style.display = "none";
    theme2.style.display = "inline-block";
    document.body.classList.add("white");
  } else {
    localStorage.color = "black";
    document.body.style.background = "black";
    document.querySelector("header").style.background = "black";
    document.querySelector("body").style.background = "black";
    document.querySelector("footer").style.background = "black";
    theme1.style.display = "inline-block";
    theme2.style.display = "none";
    document.body.classList.remove("white");
  }
}

theme1.onclick = settheme;
theme2.onclick = settheme;
var loggedIn = localStorage.getItem("loggedIn");
if (loggedIn) {
  var loginBtn = document.querySelector(".login");
  loginBtn.textContent = "Welcome, " + loggedIn;
}
