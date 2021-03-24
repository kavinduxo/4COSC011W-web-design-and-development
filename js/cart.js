import { productsInCart, totalCartCost } from './product.js';

function onLoadCartItems() {
    let productQuantity = sessionStorage.getItem('productQuantity');
    
    if(parseInt(productQuantity) === 0 || productQuantity === null){
        document.getElementById("btn").disabled = true;
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
          <div class="product"><i class="fa fa-close" style="cursor: pointer"></i> <img src="../img/${item.productImage}" alt="product image">
                   <span class="sm-hide">${item.productName}</span>
                </div>    
            <div class="price sm-hide">$${item.productPrice}.00</div>    
            <div class="quantity">
                <i class="fa fa-minus" style="cursor: pointer"></i>
                    <span style="margin-right: 10px; margin-left: 10px;">${item.productsInCart}</span>
                <i class="fa fa-plus" style="cursor: pointer"></i> 
            </div>
          <div class="total">$${item.productsInCart * item.productPrice}</div>           
                `
        });

       productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">Total Cart Price</h4>
                <h4 class="basketTotal">$${sessionStorage.getItem('totalCartCost')}.00</h4>
            </div>`

        deleteProduct();
        manageQuantity();
   }
}


function manageQuantity(){
    let decreaseQuantity = document.querySelectorAll('.fa.fa-minus');
    let increaseQuantity = document.querySelectorAll('.fa.fa-plus');
    let currentProductTag = '';
    let totalProductsInCart = sessionStorage.getItem('productsInCart');
    let tot = JSON.parse(totalProductsInCart);

    for(let i = 0; i < increaseQuantity.length; i++){

        decreaseQuantity[i].addEventListener('click', () => {

             currentProductTag = decreaseQuantity[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span')
                .textContent.toLocaleLowerCase().replace(/ /g, '-');

            if(tot[currentProductTag].productsInCart > 1){

                tot[currentProductTag].productsInCart -= 1;
                productsInCart(tot[currentProductTag],'decrease');
                totalCartCost(tot[currentProductTag],'decrease');
                sessionStorage.setItem('productsInCart', JSON.stringify(tot));
                displayCartItems();
            }
        });

        increaseQuantity[i].addEventListener('click', () => {
             currentProductTag = increaseQuantity[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span')
                .textContent.toLocaleLowerCase().replace(/ /g, '-');


            tot[currentProductTag].productsInCart += 1;
            productsInCart(tot[currentProductTag]);
            totalCartCost(tot[currentProductTag]);

            sessionStorage.setItem('productsInCart', JSON.stringify(tot));
            displayCartItems();
        });
    }
}

function deleteProduct(){
    let deleteButtons = document.querySelectorAll('.fa.fa-close');
    let totalProducts = sessionStorage.getItem('productQuantity');
    let cartValue = sessionStorage.getItem('totalCartCost');
    let productList = sessionStorage.getItem('productsInCart');
    productList = JSON.parse(productList);
    let productName;

    for(let i=0; i< deleteButtons.length; i++){

        deleteButtons[i].addEventListener('click',() => {
            productName = deleteButtons[i].parentElement.querySelector('span')
                .textContent.toLocaleLowerCase().replace(/ /g, '-');

            sessionStorage.setItem('totalCartCost', cartValue - ((productList)[productName].productPrice * (productList)[productName].productsInCart));
            sessionStorage.setItem('productQuantity', totalProducts - (productList)[productName].productsInCart);

            delete productList[productName];

            sessionStorage.setItem('productsInCart', JSON.stringify(productList));
            onLoadCartItems();
            displayCartItems();
            location.reload();
        });
    }

}

onLoadCartItems();
displayCartItems();