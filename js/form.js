let btnView = document.getElementById("btn-view");
let btnEdit = document.getElementById("btn-edit");
let btnSend = document.getElementById("btn-send");
let fields = [];

function isEmpty(name, value) {
    if (value == '' || value == null) {
        fields.push(name);
    }
}

function checkedValue() {
    if (document.getElementById('r1').checked) {
        return document.getElementById('r1').value;
    } else if (document.getElementById('r2').checked) {
        return document.getElementById('r2').value;
    } else if (document.getElementById('r3').checked) {
        return document.getElementById('r3').value;
    }
}

function setSummary() {
    document.getElementById("s-name").value = document.getElementById("txt-name").value;
    document.getElementById("s-email").value = document.getElementById("txt-email").value;
    document.getElementById("s-subject").value = document.getElementById("txt-subject").value;
    document.getElementById("s-query").value = document.getElementById("txt-query").value;
    document.getElementById("s-theme").value = checkedValue();
}

function validateEmail(email) {

    let atSymbol = email.indexOf("@");
    if (atSymbol < 1) return false;

    let dot = email.indexOf(".");
    if (dot <= atSymbol + 2) return false;

    if (dot === email.length - 1) return false;

    return true;
}

btnView.onclick = function () {
    fields = []
    let txtName = document.getElementById("txt-name").value;
    let txtEmail = document.getElementById("txt-email").value;
    let txtSubject = document.getElementById("txt-subject").value;
    let txtQuery = document.getElementById("txt-query").value;
    let txtTheme = checkedValue();

    isEmpty("Name", txtName);
    isEmpty("Email", txtEmail);
    isEmpty("Query Subject", txtSubject);
    isEmpty("Query Details", txtQuery);
    isEmpty("Theme", txtTheme);

    if (fields.length > 0) {
        let message = "Please fill the following required fields:";
        fields.forEach(element => {
            message += "\n     - " + element;
        });
        alert(message);
    } else if (validateEmail(txtEmail)) {

        let form = document.getElementById("query-form");
        form.classList.add("hidden");
        let summary = document.getElementById("summary");
        summary.classList.remove("hidden");
        setSummary();

    } else {
        alert("Please enter a valid email.");
    }
}

btnEdit.onclick = function () {
    let form = document.getElementById("query-form");
    form.classList.remove("hidden");
    let summary = document.getElementById("summary");
    summary.classList.add("hidden");
}

btnSend.onclick = function () {
    let subject = document.getElementById("txt-subject").value;
    let body = "Name: " + document.getElementById("txt-name").value + "\n\n  " +
        "Email: " + document.getElementById("txt-email").value + "\n\n  " +
        "Theme: " + checkedValue() + "\n\n  " +
        "Details: " + document.getElementById("txt-query").value;
    let mailto = "ravindu.2019802@iit.ac.lk,rumy.2019818@iit.ac.lk,sadesh.2019815@iit.ac.lk,kavindu.2019822@iit.ac.lk";
    window.open('mailto:' + mailto + '?subject=' + subject + '&body=' + body);
}
