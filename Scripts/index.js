/**
 * Autor Mario Alfonso Nuñez
 * GitHub:
 */

import { productsDisplay } from "./listProducts.js";

import { insertProducts } from "./insertProducts.js";

document.addEventListener("DOMContentLoaded", productsDisplay);

document.addEventListener("DOMContentLoaded", () => {
  const btnForm = document.getElementById("product-form-event");

  btnForm.addEventListener("click", () => {
    insertProducts();
  });
});