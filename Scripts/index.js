/**
 * Autor Mario Alfonso Nuñez
 * GitHub:
 */

import { listProducts } from "./listProducts.js"

import { insertProducts } from "./insertProducts.js"

import { total } from "./total.js"


//Listado del inventario
document.addEventListener("DOMContentLoaded", listProducts)

//nos permite introducir nuevos productos
document.addEventListener("DOMContentLoaded", () => {
  const btnForm = document.getElementById("product-form-event")

  btnForm.addEventListener("click", () => {
    insertProducts()
  })
  
})

//Nos permite calcular el valor total
const totalBtn = document.getElementById("total")
totalBtn.addEventListener("click", () => {
  total()
  
})


