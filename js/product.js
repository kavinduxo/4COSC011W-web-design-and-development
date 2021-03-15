let products = [
    {
        productID: 'jewel-001',
        productName : 'Kandian Jewel',
        productPrice: 18,
        productImage: 'img-1.jpg',
        productsInCart: 0
    },
    {
        productID: 'jewel-002',
        productName : 'Jaffna Beauty',
        productPrice: 20,
        productImage: 'img-2.jpg',
        productsInCart: 0
    },
    {
        productID: 'jewel-003',
        productName : 'Tangalle Elegant',
        productPrice: 15,
        productImage: 'img-3.jpg',
        productsInCart: 0
    },
    {
        productID: 'jewel-004',
        productName : 'Mirissa Glory',
        productPrice: 22,
        productImage: 'img-4.jpg',
        productsInCart: 0
    }
]


//Getting all the product cards button
let productList = document.querySelectorAll('.product-price-btn button');

//on click of a particular button select the item from products list based on the index of the productList and pass the product to the
//respective functions
for(let i = 0; i < productList.length; i++){
    productList[i].addEventListener("click", () => {
        productsInCart(products[i]);
        totalCartCost(products[i]);
    });
}


/*
* On Click of the button Add the product to the cart
* @param product - product that is required pass to setNumberOfProducts()
*/
function productsInCart(product){

    let productQuantity = sessionStorage.getItem('productQuantity');
    productQuantity = parseInt(productQuantity);

    if(productQuantity) {
        sessionStorage.setItem('productQuantity', productQuantity + 1);
        document.querySelector('.cart-items').textContent = productQuantity + 1;
    }else {
        sessionStorage.setItem('productQuantity', 1);
        document.querySelector('.cart-items').textContent = 1;
    }
    setNumberOfProducts(product);
}


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

/*
* On Click of the button Add the product to the cart
* @param product - update the number of products in cart
*/
function setNumberOfProducts(product) {

    let cartItems = sessionStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {

        //Check whether the selected item is not in the productsInCart if not then add the product
        if(cartItems[product.productName] === undefined){
            cartItems = {
                ...cartItems,
                [product.productName] : product
            }
        }
        cartItems[product.productName].productsInCart += 1;

    } else {
        product.productsInCart = 1;
        cartItems = {
            [product.productName] : product
        }
    }

    sessionStorage.setItem('productsInCart', JSON.stringify(cartItems));
}


/*
* On Click of the button Add the product to the cart
* @param product - update the number of products in cart
*/
function totalCartCost(product){
    let cartCost = sessionStorage.getItem('totalCartCost');

    if(cartCost != null) {
        sessionStorage.setItem('totalCartCost', parseInt(cartCost) + product.productPrice);
    }else {
        sessionStorage.setItem('totalCartCost', product.productPrice);
    }
}


onLoadCartItems();


