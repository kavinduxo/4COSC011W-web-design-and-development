let modal = document.getElementById("myModal");

let btn = document.getElementById("myBtn");

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


function ValidateCustomerInformation() {

    let city = document.querySelector('.city').value;
    let email = document.querySelector('.mail').value;
    let lastName = document.querySelector('.lname').value;
    let firstName = document.querySelector('.fname').value;
    let address = document.querySelector('.address').value;
    let contactNumber = document.querySelector('.telephone').value;

    if(firstName === "" || lastName === "" || email=== "" || city === "" || address === "" || contactNumber === "") {
        alert('All Fields should be filled');
    }else  {
//        displayInvoice(firstName, lastName, email, contactNumber);

    }

}

function ClearCart(){
    sessionStorage.clear();
}

function displayInvoice(firstName, lastName, email, contactNumber) {
    let productInvoice = document.querySelector('modal-content')
    productInvoice.innerHTML = `
            <h3>Invoice</h3>
            <h5>Customer Name: ${firstName +' '+ lastName}</h5>
            <h5>Customer Mail: ${email}</h5>
            <h5>Customer Contact Number: ${contactNumber}</h5>
            <h5>Total Bill: $${sessionStorage.getItem('totalCartCost')}</h5> 
            <br>
            <button>Thanks for Shopping</button>
`

}