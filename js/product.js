let products = [
    {
        productTag: 'kandian-jewel',
        productName : 'Kandian Jewel',
        productPrice: 18,
        productImage: 'img-1.jpg',
        productsInCart: 0
    },
    {
        productTag: 'jaffna-beauty',
        productName : 'Jaffna Beauty',
        productPrice: 20,
        productImage: 'img-2.jpg',
        productsInCart: 0
    },
    {
        productTag: 'galle-elegant',
        productName : 'Galle Elegant',
        productPrice: 15,
        productImage: 'img-3.jpg',
        productsInCart: 0
    },
    {
        productTag: 'mirissa-glory',
        productName : 'Mirissa Glory',
        productPrice: 22,
        productImage: 'img-4.jpg',
        productsInCart: 0
    }
]

let productList = document.querySelectorAll('.product-price-btn button');

for(let i = 0; i < productList.length; i++){
    productList[i].addEventListener("click", () => {
        productsInCart(products[i]);
        totalCartCost(products[i]);
    });
}

export function productsInCart(product, action){

    //Number of total products in the cart
    let productQuantity = sessionStorage.getItem('productQuantity');
    productQuantity = parseInt(productQuantity);

    //list of the products in the cart
    let totalProducts = sessionStorage.getItem('productsInCart');
    totalProducts = JSON.parse(totalProducts);

    if(action) {
        sessionStorage.setItem('productQuantity', productQuantity - 1);
        document.querySelector('.cart-items').textContent = productQuantity - 1;
    }else if (productQuantity) {
        sessionStorage.setItem('productQuantity', productQuantity + 1);
        document.querySelector('.cart-items').textContent = productQuantity + 1;
    }else {
        sessionStorage.setItem('productQuantity', 1);
        document.querySelector('.cart-items').textContent = 1;
    }

    setNumberOfProducts(product);
}

function onLoadCartItems() {
    let productQuantity = sessionStorage.getItem('productQuantity');

    if(productQuantity){
        document.querySelector('.cart-items').textContent = productQuantity;
    }
}

function setNumberOfProducts(product) {

    let cartItems = sessionStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {

        //Check whether the selected item is not in the productsInCart if not then add the product
        if(cartItems[product.productTag] === undefined){
            cartItems = {
                ...cartItems,
           [product.productTag] : product

            }
        }
        cartItems[product.productTag].productsInCart += 1;

    } else {
        product.productsInCart = 1;
        cartItems = {
         [product.productTag] : product

        }
    }
    sessionStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

export function totalCartCost(product, action){

    let cartCost = sessionStorage.getItem('totalCartCost');

    if(action) {
        cartCost = parseInt(cartCost)
        sessionStorage.setItem("totalCartCost", cartCost - product.productPrice);
    } else if (cartCost != null) {
        cartCost = parseInt(cartCost);
        sessionStorage.setItem("totalCartCost", cartCost + product.productPrice);
    } else {
        sessionStorage.setItem("totalCartCost", product.productPrice);
    }
}

onLoadCartItems();


