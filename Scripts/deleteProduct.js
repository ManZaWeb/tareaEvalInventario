import { inventory } from "./products.js"
import  { listProducts } from "./listProducts.js"

export const deleteProduct = (item) => {
    console.log(item.titulo)
    if (confirm(`¿Estás seguro de borrar "${item.titulo}"?`)) {
        const index = inventory.findIndex(product => product.id === item.id)

        if (index !== -1) { // Si el resultado no es -1, tenemos coincidencia
          inventory.splice(index, 1)
        }
      }
      const tableDisplay = document.getElementById("inventory-display2")
      tableDisplay.innerHTML = ""
      listProducts()
      
}