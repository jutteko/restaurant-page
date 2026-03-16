// contact.js
//
import bcnImg from "./images/bcn.jpg";
//
const loadContactPage = function () {
  const content = document.querySelector("#content");
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");
  content.append(contactContainer);
  //
  const contactContainerCentraal = document.createElement("div");
  contactContainerCentraal.classList.add("contact-container-centraal");
  contactContainer.append(contactContainerCentraal);
  // links
  const contactLinks = document.createElement("div");
  contactLinks.classList.add("contact-links");
  const beeldBcn = document.createElement("img");
  beeldBcn.classList.add("beeld-bcn");
  beeldBcn.src = bcnImg;
  contactContainerCentraal.append(contactLinks);
  contactLinks.append(beeldBcn);
  // rechts
  const contactRechts = document.createElement("div");
  contactRechts.classList.add("contact-rechts");
  contactContainerCentraal.append(contactRechts);
  // adres
  const adresContainer = document.createElement("div");
  adresContainer.classList.add("adres-container");
  const adresTitel = document.createElement("p");
  adresTitel.classList.add("adres-titel");
  adresTitel.textContent = "Restaurante El Rincón Español";
  adresContainer.append(adresTitel);
  const adres1 = document.createElement("p");
  adres1.classList.add("adres");
  adres1.textContent = "Carrer del Comte d'Urgell, 72, 1ºB";
  const adres2 = document.createElement("p");
  adres2.classList.add("adres");
  adres2.textContent = "08012 Barcelona";
  const adres3 = document.createElement("p");
  adres3.classList.add("adres");
  adres3.textContent = "España";
  adresContainer.append(adres1, adres2, adres3);
  contactRechts.append(adresContainer);
  // telefoon
  const telefoonContainer = document.createElement("div");
  telefoonContainer.classList.add("telefoon-container");
  const telefoon = document.createElement("p");
  telefoon.classList.add("telefoon");
  telefoon.textContent = "Tel: +34 93 458 72 19";
  telefoonContainer.append(telefoon);
  contactRechts.append(telefoonContainer);
  // mail
  const mailContainer = document.createElement("div");
  mailContainer.classList.add("mail-container");
  const mail = document.createElement("p");
  mail.classList.add("mail");
  mail.textContent = "Email: info@elrinconespanol.es";
  mailContainer.append(mail);
  contactRechts.append(mailContainer);
};

export default loadContactPage;
