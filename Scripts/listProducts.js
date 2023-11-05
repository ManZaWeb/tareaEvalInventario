/**
 * Autor Mario Alfonso Nuñez
 * GitHub:
 */

import { inventory } from "./products.js";

export const productsDisplay = () => {

    const tableDisplay = document.getElementById("inventory-display")

    inventory.forEach((item) => {

        const row = tableDisplay.insertRow()

        const cell1 = row.insertCell(0)
        const cell2 = row.insertCell(1)
        const cell3 = row.insertCell(2)
        const cell4 = row.insertCell(3)
        

        cell1.innerHTML = item.titulo
        cell2.innerHTML = item.cantidad
        cell3.innerHTML = item.precio
        cell4.innerHTML = item.formato
        
    })
}