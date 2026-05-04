var loggedIn = localStorage.getItem("loggedIn");
if (loggedIn) {
  var loginBtn = document.querySelector(".login");
  loginBtn.textContent = "Welcome, " + loggedIn;
}
// themes
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

let name1 = document.getElementById("name");
let email = document.getElementById("email");
let number = document.getElementById("number");
let message = document.getElementById("message");
let submit = document.getElementById("submit");

function clearInputs() {
  name1.value = "";
  email.value = "";
  number.value = "";
  message.value = "";
}

let data;
if (localStorage.ticket != null) {
  data = JSON.parse(localStorage.ticket);
} else {
  data = [];
}

submit.onclick = function () {
  if (name1.value.trim() === "") {
    alert("❌ Please enter your name");
    return;
  }
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!emailPattern.test(email.value)) {
    alert("❌ Enter a valid email address");
    return;
  }
  let phonePattern = /^01[0-9]{9}$/;

  if (!phonePattern.test(number.value)) {
    alert("❌ Enter a valid mobile number");
    return;
  }

  if (message.value.trim() === "") {
    alert("❌ Please enter your message");
    return;
  }

  let newData = {
    name1: name1.value,
    email: email.value,
    number: number.value,
    message: message.value,
  };

  data.push(newData);
  localStorage.setItem("contact", JSON.stringify(data));
  alert("✅💟 Your message has been successfully received");
  clearInputs();
};
