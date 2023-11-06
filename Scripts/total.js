import { inventory } from "./products.js";



export const total = () => {
    const totalInventory = document.getElementById("total-inventory-value");
    let total = 0;

    inventory.forEach((item) => {
        total += item.cantidad * item.precio;
    });

    totalInventory.innerHTML = (`El valor total del inventario es ${total} €.`)
    
};