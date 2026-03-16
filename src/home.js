// home.js

const loadHomePage = function () {
  const contentContainer = document.querySelector("#content");
  const titelContainer = document.createElement("div");
  titelContainer.classList.add("titel-container");
  const Titel = document.createElement("h1");

  // titel en  ondertitel
  Titel.classList.add("restaurant-titel");
  Titel.textContent = "El RincÓn Español";
  const titelTekst = document.createElement("p");
  titelTekst.textContent =
    "Un pequeño rincón de España donde el sabor, la tradición y la hospitalidad se unen en un mismo lugar.";
  titelTekst.classList.add("titel-tekst");

  titelContainer.appendChild(Titel);
  titelContainer.appendChild(titelTekst);
  contentContainer.appendChild(titelContainer);

  // knoppen maken
  const btnHomePageContainer = document.createElement("div");
  btnHomePageContainer.classList.add("home-page-knoppen-container");
  const btnHomePageOrder = document.createElement("button");
  btnHomePageOrder.classList.add("home-page-btn");
  btnHomePageOrder.textContent = "reservaciones";
  const btnHomePpageMenu = document.createElement("button");
  btnHomePpageMenu.classList.add("home-page-btn");
  btnHomePpageMenu.textContent = "menú";
  btnHomePageContainer.appendChild(btnHomePageOrder);
  btnHomePageContainer.appendChild(btnHomePpageMenu);
  contentContainer.appendChild(btnHomePageContainer);
};

export default loadHomePage;
