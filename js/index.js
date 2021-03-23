let groupMemebers = ["Sadesh Surendra",
    "Kavindu Supunsara",
    "Ravindu Rasanjana",
    "Infaz Rumy"];

let speed = 100;
let index = 0;
let arrLength = groupMemebers[0].length;
let scrollAt = 20;

let textPos = 0;
let contents = '';
let row;

function typewriter()
{
    contents =  ' ';
    row = Math.max(0, index-scrollAt);
    let destination = document.getElementById("typedtext");

    while ( row < index ) {
        contents += groupMemebers[row++] + '<br />';
    }
    destination.innerHTML = contents + groupMemebers[index].substring(0, textPos) + "_";
    if ( textPos++ === arrLength ) {
        textPos = 0;
        index++;
        if ( index !== groupMemebers.length ) {
            arrLength = groupMemebers[index].length;
            setTimeout("typewriter()", 500);
        }
    } else {
        setTimeout("typewriter()", speed);
    }
}

typewriter();
setTimeout(function(){
    window.location.href = './html/home.html';
}, 90000000);