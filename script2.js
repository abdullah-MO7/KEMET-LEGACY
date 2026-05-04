let theme1 = document.getElementById("theme1");
let theme2 = document.getElementById("theme2");

function applyTheme(mode) {
  const isDark = mode === "black";

  // body & header
  document.body.style.background = isDark ? "black" : "white";
  document.querySelector("header").style.background = isDark
    ? "black"
    : "white";

  // body class
  document.body.classList.toggle("black", isDark);
  document.body.classList.toggle("white", !isDark);

  // page text
  document.querySelector(".map-hero h3").style.color = isDark
    ? "white"
    : "black";
  document.querySelector(".map-hero p").style.color = isDark
    ? "white"
    : "black";

  // buttons
  theme1.style.display = isDark ? "inline-block" : "none";
  theme2.style.display = isDark ? "none" : "inline-block";

  // cards
  document.querySelectorAll(".city-card").forEach((card) => {
    card.style.background = isDark ? "#1a1a1a" : "#f5ead0";
    card.style.color = isDark ? "white" : "#1a1a1a";
    card.style.border = "1px solid #c9a84c";
  });
  document.querySelectorAll(".city-card h3").forEach((h) => {
    h.style.color = isDark ? "#c9a84c" : "#8b6914";
  });
  document.querySelectorAll(".city-desc").forEach((cd) => {
    cd.style.color = isDark ? "white" : "#3a2e1e";
  });
  document.querySelectorAll(".popular-places a").forEach((a) => {
    a.style.color = isDark ? "white" : "#000";
  });

  // footer
  document.querySelector("footer").style.background = isDark
    ? "black"
    : "white";
  document.querySelectorAll(".footer h1, .footer h3").forEach((h) => {
    h.style.color = isDark ? "white" : "black";
  });
}

function setTheme(mode) {
  localStorage.setItem("color", mode);
  applyTheme(mode);
}

applyTheme(localStorage.getItem("color") || "black");

theme1.onclick = () => setTheme("white"); // light mode button
theme2.onclick = () => setTheme("black"); // dark mode button

var loggedIn = localStorage.getItem("loggedIn");
if (loggedIn) {
  var loginBtn = document.querySelector(".login");
  loginBtn.textContent = "Welcome, " + loggedIn;
}
