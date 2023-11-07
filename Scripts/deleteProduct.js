import { inventory } from "./products.js"
import  { listProducts } from "./listProducts.js"

export const deleteProduct = (item) => {
    
    if (confirm(`¿Estás seguro de borrar/editar "${item.titulo}"?`)) {
        const index = inventory.findIndex(product => product.id === item.id)

        if (index !== -1) { // Si el resultado no es -1, tenemos coincidencia
          inventory.splice(index, 1)
        }
      }
      const tableDisplay = document.getElementById("inventory-display")
      tableDisplay.innerHTML = ""
      listProducts()
      
}