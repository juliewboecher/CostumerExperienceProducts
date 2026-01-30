
import { products } from "./data.js";
import { getExcerpt, getStockStatus } from "./helpers.js";


// Event listener - starter appen når siden er loaded
document.addEventListener("DOMContentLoaded", initApp);

// Initialize app
function initApp() {
  console.log("App initialized");
  displayAllProducts();
}
/*
// Vis alle produkter (før)
function displayAllProducts() {
  // ryd grid
  document.querySelector("#productGrid").innerHTML = "";
  // loop gennem products
  for (const product of products) {
    // kald displayProduct for hvert produkt
    displayProduct(product);
  }
}
  */

// I loop (efter)
const displayAllProducts = () => {
  document.querySelector("#productGrid").innerHTML = "";
  products.forEach(product => displayProduct(product));
};

// Vis ét produkt
function displayProduct(product) {
  const stock = getStockStatus(product.inStock);
  console.log(stock);

  // lav HTML
  const html = /*html*/ `
  <article class="product-card">
    <img src="${product.image}" class="product-image" />
    <div class="product-info">
      <h2 class="product-title">${product.title}</h2>
      <p class="product-description"> ${product.description}...</p>
      <p class="product-price">$${product.price}</p>
      <span class="product-stock ${stock.class}">${stock.text}</span>
    </div>
  </article>
  `;
  // indsæt i DOM
  document.querySelector("#productGrid").insertAdjacentHTML("beforeend", html);
}
/*
function getExcerpt(text) {
  const excerpt = text.substring(0, 50);
  console.log(excerpt);
  return excerpt;
}
  */
/*
function getStockStatus(inStock) {
  if (inStock) {
    return {
      text: "På lager",
      class: "in-stock"
    };
  } else {
    return {
      text: "Udsolgt",
      class: "out-of-stock"
    };
  }
}
*/
  

//Eksperimenter
/*
function add(a, b) {
  return a + b ;
}
console.log(add(5, 3));

const addArrow = (a, b) => a + b;
console.log(addArrow(5, 3));

function square(x) {
  return x * x;
}
console.log(square(4));

const squareArrow = x => x * x;
console.log(squareArrow(4));

// Nyt array map 
const numbers = [2, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); 
*/

const titles = products.map(product => product.title);
console.log(titles);

const prices = products.map(product => product.price);
console.log(prices);

const simplified = products.map(product => {
  return {
    name: product.title,
    cost: product.price,
    available: product.inStock
  };
})
console.log(simplified);

