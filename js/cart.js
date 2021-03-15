/*
* On loading the product page set the cart items to the selected items
*
*/
function onLoadCartItems() {
    let productQuantity = sessionStorage.getItem('productQuantity');

    if(productQuantity){
        document.querySelector('.cart-items').textContent = productQuantity;
    }
}

function displayCartItems() {
   let cartItems = sessionStorage.getItem('productsInCart');
   cartItems = JSON.parse(cartItems);

   let productContainer = document.querySelector('.products');

   if(cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
                <div class="product">
                    <i class="material-icons">close</i>
                    <img src="../img/${item.productImage}" height="150" width="100">
                    <span>${item.productName}</span>
                </div>
                <div class="total">$${item.productsInCart * item.productPrice}</div>                
`
        });
   }
}

onLoadCartItems();
displayCartItems();
