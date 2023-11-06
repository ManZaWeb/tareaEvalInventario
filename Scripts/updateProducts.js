/**
 * Autor Mario Alfonso Nuñez
 * GitHub:
 */
import { inventory } from "./products.js"
import  { listProducts } from "./listProducts.js"

export const updateProduct = (productID) => {

    const product = inventory.find(item => item.id === productID)
        if(product){
            const submitButton = document.getElementById("product-form-event")
            const productNameInput = document.getElementById("product-name")
            const productQuantityInput = document.getElementById("product-qty")
            const productPriceInput = document.getElementById("product-price")
            const productFormatInput = document.getElementById("product-format")

            submitButton.innerText = "editar"

            productNameInput.value = product.titulo
            productQuantityInput.value = product.cantidad
            productPriceInput.value = product.precio
            productFormatInput.value = product.formato

            const productForm = document.getElementById("product-form-event")

            productForm.onsubmit = function (event){
                event.preventDefault()
            }

            product.titulo = productNameInput.value
            product.cantidad = productQuantityInput.value
            product.precio = productPriceInput.value
            product.formato = productFormatInput.value

            listProducts()

        }
}