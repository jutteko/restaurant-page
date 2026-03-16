// index.js
import "./styles.css";
import loadHomePage from "./home.js";
import loadMenuPage from "./menu.js";
import loadContactPage from "./contact.js";
//
// eerste pagina bij het laden site
loadHomePage();
//
const content = document.querySelector("#content");
const homeKnop = document.querySelector("#btn-home");
const menuKnop = document.querySelector("#btn-menu");
const contactKnop = document.querySelector("#btn-contact");
//
homeKnop.addEventListener("click", (e) => {
  content.textContent = "";
  loadHomePage();
});
//
menuKnop.addEventListener("click", (e) => {
  content.textContent = "";
  loadMenuPage();
});
//
contactKnop.addEventListener("click", (e) => {
  content.textContent = "";
  loadContactPage();
});
