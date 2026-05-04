let container_Islam = document.getElementById("Islam");
let names = ["Islamic", "Christianity", "Judaism"];
let gallery = [
  "imgs/Mosque_of_Muhammad_Ali.jpg",
  "imgs/church.jpg",
  "imgs/img1.jpg",
];
let link_card = document.getElementById("link_card");
let links = ["islam.html", "christianity.html", "judaism.html"];

let paragraph = [
  "Egypt stands as a beacon of Islamic heritage, boasting a skyline of majestic minarets and historic mosques like Al-Azhar. From the medieval charm of Khan el-Khalili to the Saladin Citadel, it offers a profound journey through centuries of Islamic civilization.",
  "Following the sacred path of the Holy Family, Egypt is home to some of the world’s oldest monasteries and most revered churches. Sites like the Hanging Church and the Monastery of Saint Catherine offer a unique spiritual experience rooted in early Christian history.",
  "Egypt preserves a significant chapter of Jewish history, highlighted by historic landmarks such as the Ben Ezra Synagogue in Old Cairo. These sites serve as a testament to the long-standing presence and cultural contributions of the Jewish community within the heart of the Nile Valley.",
];
if (container_Islam) {
  function element(names, gallery, paragraph, links) {
    let card = document.createElement("div");
    let title = document.createElement("h2");
    let para = document.createElement("p");
    let img = document.createElement("img");
    let a = document.createElement("a");

    card.classList.add("main-card");

    //content
    let head = document.createTextNode(names);
    let p = document.createTextNode(paragraph);

    title.appendChild(head);
    para.appendChild(p);

    img.src = gallery; //نربط الصور
    a.href = links; // تربط اللينك

    container_Islam.style.display = "flex";
    container_Islam.style.justifyContent = "space-between";
    container_Islam.style.gap = "20px";
    container_Islam.style.padding = "20px";

    card.style.flex = "1";
    card.style.color = "#d0a61b";
    card.style.padding = "2px";
    card.style.margin = "10px";
    card.style.display = "inline-block";
    card.style.verticalAlign = "top";
    card.style.borderRadius = "8px";
    card.style.textAlign = "center";
    para.style.textAlign = "left";

    img.style.width = "100%";
    img.style.height = "600px";
    img.style.objectFit = "cover";
    img.style.borderRadius = "8px";

    card.appendChild(title);
    card.appendChild(img);
    card.appendChild(para);
    a.appendChild(card);
    container_Islam.appendChild(a);
  }
  for (let i = 0; i < 3; i++) {
    element(names[i], gallery[i], paragraph[i], links[i]);
  }
}
let theme1 = document.getElementById("theme1");
let theme2 = document.getElementById("theme2");

if (localStorage.color == "black" || !localStorage.color) {
  localStorage.color = "black";
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
var loggedIn = localStorage.getItem("loggedIn");
if (loggedIn) {
  var loginBtn = document.querySelector(".login");
  loginBtn.textContent = "Welcome, " + loggedIn;
}
