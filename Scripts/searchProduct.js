import { inventory } from "./products.js"
import { deleteProduct } from "./deleteProduct.js"
import { updateProduct } from "./updateProducts.js"

export const searchProduct = () => {
    const psearch = document.getElementById("product-search");
    
    console.log("click")
    
    psearch.addEventListener("input", () => {
        const psearchvalue = psearch.value.toLowerCase()

        const pfind = inventory.filter((product) => product.titulo.toLowerCase().includes(psearchvalue))

        printSearch(pfind);
        
    })
}

function printSearch(pfind) {
    const tableDisplay = document.getElementById("inventory-display"); 

    
    tableDisplay.innerHTML = "";

    // Create rows with the products that match the search (same code as in listProducts.js)
    pfind.forEach((item) => {

    const row = tableDisplay.insertRow();

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
    deleteBtn.classList = "deleteBtn"
    deleteBtn.addEventListener("click", () => {
      deleteProduct(item)
      
    })

    const editBtn = document.createElement("button")
    editBtn.innerText = "EDITAR"
    editBtn.classList = "editBtn"
    editBtn.addEventListener("click", () => {
      updateProduct(item.id)
      deleteProduct(item)
      window.scroll({
        top: 10,
        behavior: "smooth",
      });
      
    })    

    cell5.appendChild(editBtn)
    cell5.appendChild(deleteBtn)  
    })
}
