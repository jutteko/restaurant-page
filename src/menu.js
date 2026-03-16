// menu.js

const loadMenuPage = function () {
  const menu = {
    aperitivos: [
      { naam: "Sangría Tinto (jara de 1 litro)", prijs: "29.50" },
      { naam: "Sangría Blanca (jara de 1 litro)", prijs: "29.50" },
      { naam: "Sangría Cava (jara de 1 litro)", prijs: "36.50" },
      { naam: "Tinto de Verano", prijs: "5.00" },
      { naam: "Vermouth", prijs: "4.50" },
    ],

    tapas: [
      { naam: "Patatas Bravas", prijs: "6.00" },
      { naam: "Croquetas de Jamón", prijs: "7.00" },
      { naam: "Tortilla Española", prijs: "5.50" },
      { naam: "Padrones", prijs: "8.50" },
    ],

    "platos principales": [
      { naam: "Paella Valenciana", prijs: "18.00" },
      { naam: "Pollo al Ajillo", prijs: "15.00" },
      { naam: "Pescado a la Plancha", prijs: "17.00" },
    ],

    postres: [
      { naam: "Crema Catalana", prijs: "6.00" },
      { naam: "Churros con Chocolate", prijs: "5.00" },
      { naam: "Flan Casero", prijs: "4.50" },
    ],
  };
  const content = document.querySelector("#content");
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  const menuTitel = document.createElement("h1");
  menuTitel.textContent = "menú";
  menuTitel.classList.add("menu-titel");
  menuContainer.append(menuTitel);
  //
  // begin loop types
  Object.entries(menu).forEach(([categorie, gerechten]) => {
    //
    const type = document.createElement("div");
    type.classList.add("type");
    const typeNaam = document.createElement("p");
    typeNaam.classList.add("type-naam");
    typeNaam.textContent = `${categorie}`;
    // de types appenden
    type.append(typeNaam);
    menuContainer.append(type);

    // 2de loop met de gerechten
    //
    gerechten.forEach((gerecht) => {
      const gerechtContainer = document.createElement("div");
      gerechtContainer.classList.add("gerecht-container");
      const gerechtNaam = document.createElement("p");
      gerechtNaam.classList.add("gerecht-naam");
      gerechtNaam.textContent = `${gerecht.naam}`;
      const gerechtPrijs = document.createElement("p");
      gerechtPrijs.classList.add("gerecht-prijs");
      gerechtPrijs.textContent = `€ ${gerecht.prijs}`;
      // de gerechten en prijzen appenden
      gerechtContainer.append(gerechtNaam, gerechtPrijs);
      menuContainer.append(gerechtContainer);
      //einde loop 2
    });
    // einde loop 1
  });
  // DOM samenstellen
  //
  content.append(menuContainer);
};

export default loadMenuPage;
