"use strict";

// ===== APP INITIALISERING =====
// Start app når DOM er loaded (hele HTML siden er færdig med at indlæse)
document.addEventListener("DOMContentLoaded", initApp);

// Initialize the app - sæt event listeners og hent data
function initApp() {
  console.log("App initialized");
}

// tjekker om console virker
console.log("Tjekker om console virker");

// Tilføjer string, number og boolean. Typeof viser hvilken type variabel det er
const productTitle ="Fjalren  - Foldsack No. 1 Backpack";
const productPrice = 849;
const inStock = true;

console.log(typeof productTitle);
console.log(typeof productPrice);
console.log(typeof inStock);

// Js til bunden af side (test sektion)
const testSection = document.querySelector("#test");
const html = `
<div>
  <h3>Test: Product Information</h3>
  <p><strong>Titel:</strong>${productTitle}</p>
  <p><strong>Pris:</strong>${productPrice}</p>
  <p><strong>På lager:</strong>${inStock}</p>
</div>
`;

testSection.insertAdjacentHTML("beforeend", html);

// Nye variabler
const productTitle2 = "Mens Casual Premium Slim Fit T-Shirt";
const productPrice2 = 199;
const inStock2 = false;

console.log(typeof productTitle2);
console.log(typeof produktPrice2);
console.log(typeof inStock2);

const testSection2 = document.querySelector("#test");
const html2 = `
<div>
  <h3>Test: Product Information</h3>
  <p><strong>Titel:</strong>${productTitle2}</p>
  <p><strong>Pris:</strong>${productPrice2}</p>
  <p><strong>På lager:</strong>${inStock2}</p>
</div>
`;

testSection.insertAdjacentHTML("beforeend", html2);

// Vis hvis på lager
if (inStock) {
  console.log(`${productTitle} er på lager`);
}
else {
  console.log(`${productTitle} er ikke på lager`);
}

