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
/*console.log("Tjekker om console virker");

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
testSection.insertAdjacentHTML("beforeend", `<p style="color: green;">${productTitle} er på lager!</p>${html}`);
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
testSection2.insertAdjacentHTML("beforeend", `<p style="color: red;">${productTitle2} er desværre ikke på lager!</p>${html2}`);
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
*/

// ========== OPGAVE 5 ===========
// Del 1
const object = {
  key: "value",
  anotherKey: 123
};

// Del 2
const product1 = {
  title: "Fjallraven - Foldsack No. 1 Backpack",
  price: 849,
  inStock: true,
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  description: "Your perfect pack for everyday use and walks in the city.",
  category: "Bags"
};

const product2 = {
  title: "Mens Casual Premium Slim Fit T-Shirts",
  price: 179,
  inStock: true,
  image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
  description: "Slim-fit, casual t-shirt for men.",
  category: "Fashion",
};

// Del 6
const product3 = {
  title: "Mens Cotton Jacket",
  price: 299,
  inStock: false,
  image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
  description: "Stylish and comfortable cotton jacket for men.",
  category: "Fashion",
};

// Vis produktet i test sektionen
console.log(product1);
console.log(product2);
console.log(product3);

// Del 3
console.log(product1.title+" koster "+product1.price+" kr.");
console.log(product2.title+" koster "+product2.price+" kr.");

// Del 5
// Vis "På lager" eller "Udsolgt"
let stockText;
let stockClass;
if (product1.inStock) {
  stockText = "På lager";
  stockClass = "in-stock";
} else {
  stockText = "Udsolgt";
  stockClass = "out-of-stock";
}

// Del 4
// Opretter produkt sektionen
const html = /*html*/`
  <article class="product-card">
  <img src="${product1.image}" class="product-image">
  <div class="product-info">
    <h2 class="product-name">${product1.title}</h2>
    <p class="product-description">${product1.description}</p>
    <p class="product-price">${product1.price} kr.</p>
    <span class="product-stock ${stockClass}">${stockText}</span>
  </div>
</article>
`;
document.querySelector("#test").insertAdjacentHTML("beforeend", html);

// Del 6
// Tilføj product 2 til test sektionen
const html2 = /*html*/ `
  <article class="product-card">
  <img src="${product2.image}" class="product-image">
  <div class="product-info">
    <h2 class="product-name">${product2.title}</h2>
    <p class="product-description">${product2.description}</p>
    <p class="product-price">${product2.price} kr.</p>
    <span class="product-stock ${stockClass}">${stockText}</span>
  </div>
</article>
`;
document.querySelector("#test").insertAdjacentHTML("beforeend", html2);

// Tilføj product 3 til test sektionen
const html3 = /*html*/ `
  <article class="product-card">
  <img src="${product3.image}" class="product-image">
  <div class="product-info">
    <h2 class="product-name">${product3.title}</h2>
    <p class="product-description">${product3.description}</p>
    <p class="product-price">${product3.price} kr.</p>
    <span class="product-stock ${stockClass}">${stockText}</span>
  </div>
</article>
`;
document.querySelector("#test").insertAdjacentHTML("beforeend", html3);

