import { listProducts } from "./listProducts.js";
import { inventory } from "./products.js";

export const insertProducts = () => {
  const productForm = document.getElementById("inventory-insert");
  productForm.addEventListener("submit", function (event) {
    // Le quitamos las propiedades a la etiqueta form
    event.preventDefault();

    //Capturar los valores introducidos por el usuario
    const productName = document.getElementById("product-name").value;
    const productQty = parseInt(document.getElementById("product-qty").value);
    const productPrice = parseFloat(
      document.getElementById("product-price").value
    );
    const productFormat = document.getElementById("product-format").value;
    // Validar campos que no estén vacíos

    if (productName && !isNaN(productQty) && !isNaN(productPrice)) {
      const newProduct = {
        id: inventory.length + 1,
        titulo: productName,
        cantidad: productQty,
        precio: productPrice,
        formato: productFormat
      };
      // Añadir producto
      inventory.push(newProduct);

      // Limpiar la tabla antes de la nueva insercción
      const cleanTbody = document.getElementById("inventory-display");

      cleanTbody.innerHTML = "";
      // Limpiar los campos del formulario
      productForm.reset();

      listProducts()
    }
  });
};