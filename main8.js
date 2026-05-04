// themes
let theme1 = document.getElementById("theme1");
let theme2 = document.getElementById("theme2");

if (localStorage.color == "black" || !localStorage.color) {
  document.querySelector("header").style.background = "black";
  theme1.style.display = "inline-block";
  theme2.style.display = "none";
  document.body.classList.remove("white");
  localStorage.color = "black";
} else {
  document.querySelector("header").style.background = "white";
  theme1.style.display = "none";
  theme2.style.display = "inline-block";
  document.body.classList.add("white");
}
function settheme() {
  if (localStorage.color == "black") {
    localStorage.color = "white";
    document.querySelector("header").style.background = "white";
    theme1.style.display = "none";
    theme2.style.display = "inline-block";
    document.body.classList.add("white");
  } else {
    localStorage.color = "black";
    document.querySelector("header").style.background = "black";
    theme1.style.display = "inline-block";
    theme2.style.display = "none";
    document.body.classList.remove("white");
  }
}

theme1.onclick = settheme;
theme2.onclick = settheme;

let adults = document.getElementById("adults");
let children = document.getElementById("children");
let seniors = document.getElementById("seniors");
let submit = document.getElementById("submit");
let summaryPrice = document.getElementById("summary-price");
let summaryAdults = document.getElementById("summary-adults");
let summaryChildren = document.getElementById("summary-children");
let summarySeniors = document.getElementById("summary-seniors");
let summaryType = document.getElementById("summary-type");
let summaryPlace = document.getElementById("summary-place");
let type1 = document.getElementById("type1");
let placeSelect = document.getElementById("placeSelect");
let name1 = document.getElementById("name1");
let email1 = document.getElementById("email1");
let number1 = document.getElementById("number1");
let date1 = document.getElementById("date1");

function getTotal() {
  if ((adults.value || children.value || seniors.value) != "") {
    let result =
      +adults.value * 200 + +children.value * 100 + +seniors.value * 150;
    summaryPrice.innerHTML = result + "EGP";
    summaryAdults.innerHTML = adults.value;
    summaryChildren.innerHTML = children.value;
    summarySeniors.innerHTML = seniors.value;
    summaryType.innerHTML = type1.value;
    summaryPlace.innerHTML = placeSelect.value;
  } else {
    summaryPrice.innerHTML = "0 EGP";
    summaryAdults.innerHTML = "0";
    summaryChildren.innerHTML = "0";
    summarySeniors.innerHTML = "0";
  }
}

function getType() {
  summaryType.innerHTML = type1.value;
  summaryPlace.innerHTML = placeSelect.value;
}

function clearInputs() {
  adults.value = "";
  children.value = "";
  seniors.value = "";
  name1.value = "";
  email1.value = "";
  number1.value = "";
  date1.value = "";
  summaryAdults.innerHTML = "0";
  summaryChildren.innerHTML = "0";
  summarySeniors.innerHTML = "0";
  summaryPrice.innerHTML = "0";
}

let data;
if (localStorage.ticket != null) {
  data = JSON.parse(localStorage.ticket);
} else {
  data = [];
}

submit.onclick = function () {
  let totalTickets = +adults.value + +children.value + +seniors.value;

  if (totalTickets <= 0) {
    alert("❌ At least one ticket");
    return;
  }
  if (name1.value.trim() === "") {
    alert("❌ Please enter your name");
    return;
  }
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!emailPattern.test(email1.value)) {
    alert("❌ Enter a valid email address");
    return;
  }
  let phonePattern = /^01[0-9]{9}$/;

  if (!phonePattern.test(number1.value)) {
    alert("❌ Enter a valid mobile number");
    return;
  }

  let today = new Date();
  today.setHours(0, 0, 0, 0);

  let selectedDate = new Date(date1.value);

  if (date1.value === "" || selectedDate < today) {
    alert("❌ Choose a valid date");
    return;
  }
  let newData = {
    type1: type1.value,
    placeSelect: placeSelect.value,
    adultsNum: adults.value,
    childrenNum: children.value,
    seniorsNum: seniors.value,
    name: name1.value,
    email: email1.value,
    number: number1.value,
    date: date1.value,
    price: summaryPrice.innerHTML,
  };

  data.push(newData);
  localStorage.setItem("ticket", JSON.stringify(data));
  alert("✅ Your booking has been successful!");
  clearInputs();
};

var loggedIn = localStorage.getItem("loggedIn");
if (loggedIn) {
  var loginBtn = document.querySelector(".login");
  loginBtn.textContent = "Welcome, " + loggedIn;
}
