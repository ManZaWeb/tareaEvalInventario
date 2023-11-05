/**
 * Autor Mario Alfonso Nuñez
 * GitHub:
 */

import { inventory } from "./products.js"

export const productsDisplay = () => {

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

      if (confirm(`¿Estás seguro de borrar "${item.titulo}"?`)) {
        const index = inventory.findIndex(product => product.id === item.id)

        if (index !== -1) { // Si el resultado no es -1, tenemos coincidencia
          inventory.splice(index, 1)
        }
      }
      tableDisplay.innerHTML = ""
      productsDisplay()
    });

    const editBtn = document.createElement("button")
    editBtn.innerText = "EDITAR"
    editBtn.addEventListener("click", () => {



      const itemTitle = document.getElementById('product-name')
      const itemCant = document.getElementById('product-qty')
      const itemPrice = document.getElementById('product-price')
      const itemVersion = document.getElementById('product-format')


      itemTitle.value = item.titulo
      itemCant.value = item.cantidad
      itemPrice.value = item.precio
      itemVersion.value = item.formato



    })

    cell5.appendChild(editBtn)
    cell5.appendChild(deleteBtn)

  })
}