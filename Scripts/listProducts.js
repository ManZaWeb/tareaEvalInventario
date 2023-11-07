/**
 * Autor Mario Alfonso Nuñez
 * GitHub:
 */

import { inventory } from "./products.js"
import { deleteProduct } from "./deleteProduct.js"
import { updateProduct } from "./updateProducts.js"


//import { searchProduct } from "./searchProduct.js"

export const listProducts = () => {

  const tableDisplay = document.getElementById("inventory-display")

  inventory.forEach((item) => {

    const row = tableDisplay.insertRow()

    const cell1 = row.insertCell(0)
    const cell2 = row.insertCell(1)
    const cell3 = row.insertCell(2)
    const cell4 = row.insertCell(3)
    const cell5 = row.insertCell(4)


    cell1.innerHTML = item.titulo
    cell2.innerHTML = item.cantidad
    cell3.innerHTML = item.precio
    cell4.innerHTML = item.formato


    const deleteBtn = document.createElement("button")
    deleteBtn.innerText = "BORRAR"
    deleteBtn.addEventListener("click", () => {
      deleteProduct(item)
      
    })

    const editBtn = document.createElement("button")
    editBtn.innerText = "EDITAR"
    editBtn.addEventListener("click", () => {
      updateProduct(item.id)
      deleteProduct(item)
      
    })    

    cell5.appendChild(editBtn)
    cell5.appendChild(deleteBtn)  

  })
}