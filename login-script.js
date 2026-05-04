var loggedIn = localStorage.getItem("loggedIn");
if (loggedIn) {
  document.querySelector(".form").innerHTML =
    "<h1>☥ Kemet Legacy</h1>" +
    "<p class='welcome'>Welcome, " +
    loggedIn +
    "</p>" +
    "<button type='button'onclick='logout()'>Logout</button>" +
    "<button onclick=\"window.location.href='index.html'\">HOME</button>";
}
function save() {
  var userName = document.getElementById("username").value.trim();
  var eMail = document.getElementById("email").value.trim();
  var pAssword = document.getElementById("password").value.trim();
  var msg = document.getElementById("msg");

  if (!userName || !eMail || !pAssword) {
    msg.style.color = "#e07060";
    msg.textContent = "Please fill in all fields.";

    return;
  }

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!emailPattern.test(eMail)) {
    msg.textContent = "❌ Enter a valid email address";

    return;
  }

  if (pAssword.length < 8) {
    msg.textContent =
      "❌ Enter a password consisting of 8 characters or more. ";
    return;
  }

  var users = JSON.parse(localStorage.getItem("users") || "[]");
  users.push({ username: userName, email: eMail, password: pAssword });
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("loggedIn", userName);

  msg.style.color = "#90c870";
  msg.textContent = "Data saved successfully!";

  document.querySelector(".form").innerHTML =
    "<h1>☥ Kemet Legacy</h1>" +
    "<p class='welcome'>Welcome, " +
    userName +
    "</p>" +
    "<button type='button'onclick='logout()'>Logout</button>" +
    "<button onclick=\"window.location.href='index.html'\">HOME</button>";
}
function logout() {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("users");
  location.reload();
}
var loggedIn = localStorage.getItem("loggedIn");
if (loggedIn) {
  var loginBtn = document.querySelector(".login");
  loginBtn.textContent = "Welcome, " + userName;
}
