"use strict";

// ===== APP INITIALISERING =====
// Start app når DOM er loaded (hele HTML siden er færdig med at indlæse)
document.addEventListener("DOMContentLoaded", initApp);

// Initialize the app - sæt event listeners og hent data
function initApp() {
  console.log("App initialized");
}

// ======== OPGAVE 2 ==========
// tjekker om console virker
console.log("Tjekker om console virker");

// ======== OPGAVE 3 ==========
// Tilføjer string, number og boolean. Typeof viser hvilken type variabel det er
const productTitle ="Fjalren  - Foldsack No. 1 Backpack";
const productPrice = 1039;
const inStock = false;
// Del 2
console.log(typeof productTitle);
console.log(typeof productPrice);
console.log(typeof inStock);

// ========= OPGAVE 3 
// Js til bunden af side (test sektion)
if (inStock) { // tilføjet fra opgave 4
const testSection = document.querySelector("#test");
const html = `
<div>
  <h3>Test: Product Information</h3>
  <p><strong>Titel:</strong>${productTitle}</p>
  <p><strong>Pris:</strong>${productPrice} kr.</p>
  <p><strong>På lager:</strong>${inStock}</p>
</div>
`;
// fortæller hvilken status produktet har og tilpasser farven
testSection.insertAdjacentHTML("beforeend", `<p style="color: green;">${productTitle} er desværre ikke på lager!</p>${html}`);
}

// Nye variabler
const productTitle2 = "Mens Casual Premium Slim Fit T-Shirt";
const productPrice2 = 199;
const inStock2 = true;

console.log(typeof productTitle2);
console.log(typeof productPrice2);
console.log(typeof inStock2);

if (inStock2) {
const testSection2 = document.querySelector("#test");
const html2 = `
<div>
  <h3>Test: Product Information</h3>
  <p><strong>Titel:</strong>${productTitle2}</p>
  <p><strong>Pris:</strong>${productPrice2} kr.</p>
  <p><strong>På lager:</strong>${inStock2}</p>
</div>
`;
// Fortæller status på produktet, og tilpasser farven
testSection2.insertAdjacentHTML("beforeend", `<p style="color: red;">${productTitle2} er på lager!</p>${html2}`);
}

// ========= OPGAVE 4 =========
// Vis hvis på lager
if (inStock) {
  console.log(`${productTitle} er på lager`);
}
else {
  console.log(`${productTitle} er desværre ikke på lager!`);
}

// Sammenlign priser (fortæller hvilket produkt der er dyrest, og hvad det koster)
if (productPrice > productPrice2) {
  console.log(`${productTitle} er dyrest og koster ${productPrice} kr.`);
} else {
  console.log(`${productTitle2} er dyrest og koster ${productPrice2} kr.`);
}
// Sammenlign priser (fortæller hvilket produkt der er billigst, og hvad det koster)
if (productPrice < productPrice2) {
  console.log(`${productTitle} er billigst og koster ${productPrice}kr.`);
} else {
  console.log(`${productTitle2} er billigst og koster ${productPrice2} kr.`);
}

