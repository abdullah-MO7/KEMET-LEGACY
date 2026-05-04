const dynastyData = {
  memphis: {
    city: "Memphis - Capital of the Old Kingdom",
    dynasties: [
      {
        title: "Third Dynasty (c. 2686–2613 BCE)",
        works: [
          "Construction of the Step Pyramid of Djoser in Saqqara (the first large-scale stone structure).",
          "Consolidation of the central administrative system.",
        ],
      },
      {
        title:
          'Fourth Dynasty (c. 2613–2494 BCE) - "The Age of the Pyramid Builders"',
        works: [
          "Construction of the three Giza Pyramids (Khufu, Khafre, Menkaure).",
          "Carving of the Great Sphinx.",
          "The power of the monarchy and centralized authority reached its peak.",
        ],
      },
    ],
  },
  thebes: {
    city: "Thebes (Luxor) - Capital of the New Kingdom",
    dynasties: [
      {
        title: 'Eighteenth Dynasty (c. 1550–1292 BCE) - "The Empire"',
        works: [
          "Expulsion of the Hyksos and the beginning of the era of military victories.",
          "Reign of Queen Hatshepsut and construction of her mortuary temple at Deir el-Bahari.",
          "Thutmose III military campaigns that expanded the empire.",
          "Construction of the major parts of Karnak and Luxor temples.",
          "Beginning of royal burials in the Valley of the Kings.",
        ],
      },
      {
        title: "Nineteenth Dynasty (c. 1292–1189 BCE)",
        works: [
          "Reign of Ramses II, construction of the Abu Simbel temples, and completion of the Great Hypostyle Hall at Karnak.",
          "Signing of the first written peace treaty in history with the Hittites.",
          "Massive architectural expansions across Egypt.",
        ],
      },
    ],
  },
  akhetaten: {
    city: "Akhetaten (Tell el-Amarna) - Capital of the Religious Revolution",
    dynasties: [
      {
        title: "Eighteenth Dynasty (Amarna Period - Reign of Akhenaten)",
        works: [
          'Establishing the city as a new capital dedicated to the worship of the one god "Aten".',
          'Emergence of the realistic and unique "Amarna Art".',
          'Writing of the famous "Great Hymn to the Aten".',
          "The period witnessed political and external challenges due to the preoccupation with religious reform.",
        ],
      },
    ],
  },
  avaris: {
    city: "Avaris - Capital of the Hyksos",
    dynasties: [
      {
        title: "Fifteenth and Sixteenth Dynasties (Second Intermediate Period)",
        works: [
          'Was the center of Hyksos rule ("Shepherd Kings") who occupied northern Egypt.',
          "The Hyksos introduced the chariot and composite bow to Egypt.",
          "Remained the capital until King Ahmose I succeeded in expelling them and unifying the country.",
        ],
      },
    ],
  },
};

function showDynastyInfo(cityKey) {
  const data = dynastyData[cityKey];
  const panel = document.getElementById("infoPanel");
  const cityNameEmit = document.getElementById("panel-city-name");
  const contentEmit = document.getElementById("panel-content");

  cityNameEmit.innerText = data.city;

  let htmlContent = "";
  data.dynasties.forEach((dyn) => {
    htmlContent += `
                    <div class="dynasty-section">
                        <div class="dynasty-title">${dyn.title}</div>
                        <ul class="works-list">
                            ${dyn.works.map((work) => `<li>${work}</li>`).join("")}
                        </ul>
                    </div>
                `;
  });
  contentEmit.innerHTML = htmlContent;

  panel.classList.add("active");
  panel.scrollIntoView({ behavior: "smooth", block: "center" });
}

const whiteBtn = document.getElementById("theme1");
const blackBtn = document.getElementById("theme2");

window.onload = function () {
  const savedTheme = localStorage.getItem("color");

  if (savedTheme === "white") {
    document.body.classList.add("white");
    blackBtn.style.display = "inline-block";
    whiteBtn.style.display = "none";
  } else {
    document.body.classList.add("black");
    whiteBtn.style.display = "inline-block";
    blackBtn.style.display = "none";
  }
};

// زرار white
whiteBtn.onclick = () => {
  document.body.classList.add("white");
  document.body.classList.remove("black");

  localStorage.setItem("color", "white");

  whiteBtn.style.display = "none";
  blackBtn.style.display = "inline-block";
};

// زرار black
blackBtn.onclick = () => {
  document.body.classList.add("black");
  document.body.classList.remove("white");

  localStorage.setItem("color", "black");

  blackBtn.style.display = "none";
  whiteBtn.style.display = "inline-block";
};
var loggedIn = localStorage.getItem("loggedIn");
if (loggedIn) {
  var loginBtn = document.querySelector(".login");
  loginBtn.textContent = "Welcome, " + loggedIn;
}
