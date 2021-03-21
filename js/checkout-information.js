let modal = document.getElementById("Modal");

let btn = document.getElementById("Btn");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


let confirmOrder = document.getElementById('confirm-order');

let isNullFieldsAvailable, isContactNumberValid, isEmailValid;

confirmOrder.addEventListener('click', () => {
    ValidateCustomerInformation();
})

function ValidateCustomerInformation() {

    let city = document.querySelector('.city').value;
    let email = document.querySelector('.mail').value;
    let lastName = document.querySelector('.lname').value;
    let firstName = document.querySelector('.fname').value;
    let address = document.querySelector('.address').value;
    let contactNumber = document.querySelector('.telephone').value;

    isNullFieldsAvailable = checkForNullValues(firstName, lastName, email, contactNumber, city, address);

    if(isNullFieldsAvailable){
        isContactNumberValid = validateContactNumber(contactNumber);
        if(!isContactNumberValid) {
            alert('Invalid Contact Number');
        }
        isEmailValid = validateEmail(email);
        if(!isEmailValid) {
            alert('Invalid Email');
        }
    }

        if(isNullFieldsAvailable && isContactNumberValid && isEmailValid) {
            displayInvoice(firstName, lastName, email, contactNumber);
        }
}

function checkForNullValues(firstName, lastName, email, contactNumber, city, address) {

    if(firstName === "" || lastName === "" || email=== "" || city === "" || address === "" || contactNumber === "") {
        alert('All Fields should be filled');
        return false;
    }else {
        return true;
    }
}

function validateEmail(email) {

    let atSymbol = email.indexOf("@");
    if(atSymbol < 1)  return false;

    let dot = email.indexOf(".");
    if(dot <= atSymbol + 2) return false;

    if (dot === email.length - 1) return false;

    return true;
}

function validateContactNumber(contactNumber) {
    if(contactNumber.length !== 10 || isNaN(contactNumber)){
        return false;
    }else {
        return true;
    }
}


function displayInvoice(firstName, lastName, email, contactNumber) {
    let productInvoice = document.querySelector('.modal-content')

    productInvoice.innerHTML = `
            <button id="Btn" onClick="ClearEnv()">Thanks for Shopping</button>
            <br style="margin-top: 25px">
            <h1>Invoice</h1>
            <hr>
            <h5>Customer Name: ${firstName +' '+ lastName}</h5>
            <h5>Customer Mail: ${email}</h5>
            <h5>Customer Contact Number: ${contactNumber}</h5>
            <h5>Total Bill: $${sessionStorage.getItem('totalCartCost')}</h5>
            <hr>
            <h3>Break Down</h3>    
            <br>
             
`;
    Object.values(JSON.parse(sessionStorage.getItem('productsInCart'))).map(item => {
            productInvoice.innerHTML += `
            <h5>Product Name:  ${item.productName}</h5>
            <h5>Product Price: ${item.productPrice}</h5>
            <h5>Quantity: ${item.productsInCart}</h5>
            <hr>    
`;


    });
}


function ClearEnv() {
    sessionStorage.clear();
    location.reload();
}