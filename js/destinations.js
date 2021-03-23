// central province thumbnail hovering effect
document.getElementById('figureCP').addEventListener('mouseover', function(){
    document.getElementById('CP').style.display = "block";
})

document.getElementById('figureCP').addEventListener('mouseleave', function(){
    document.getElementById('CP').style.display = "none";
})

// eastern province thumbnail hovering effect
document.getElementById('figureEP').addEventListener('mouseover', function(){
    document.getElementById('EP').style.display = "block";
})

document.getElementById('figureEP').addEventListener('mouseleave', function(){
    document.getElementById('EP').style.display = "none";
})

// north central province thumbnail hovering effect
document.getElementById('figureNCP').addEventListener('mouseover', function(){
    document.getElementById('NCP').style.display = "block";
})

document.getElementById('figureNCP').addEventListener('mouseleave', function(){
    document.getElementById('NCP').style.display = "none";
})

// north western province thumbnail hovering effect
document.getElementById('figureNWP').addEventListener('mouseover', function(){
    document.getElementById('NWP').style.display = "block";
})

document.getElementById('figureNWP').addEventListener('mouseleave', function(){
    document.getElementById('NWP').style.display = "none";
})

// northern province thumbnail hovering effect
document.getElementById('figureNP').addEventListener('mouseover', function(){
    document.getElementById('NP').style.display = "block";
})

document.getElementById('figureNP').addEventListener('mouseleave', function(){
    document.getElementById('NP').style.display = "none";
})

// sabaragamuwa province thumbnail hovering effect
document.getElementById('figureSaP').addEventListener('mouseover', function(){
    document.getElementById('SaP').style.display = "block";
})

document.getElementById('figureSaP').addEventListener('mouseleave', function(){
    document.getElementById('SaP').style.display = "none";
})

// southern province thumbnail hovering effect
document.getElementById('figureSP').addEventListener('mouseover', function(){
    document.getElementById('SP').style.display = "block";
})

document.getElementById('figureSP').addEventListener('mouseleave', function(){
    document.getElementById('SP').style.display = "none";
})

// uva province thumbnail hovering effect
document.getElementById('figureUP').addEventListener('mouseover', function(){
    document.getElementById('UP').style.display = "block";
})

document.getElementById('figureUP').addEventListener('mouseleave', function(){
    document.getElementById('UP').style.display = "none";
})

// western province thumbnail hovering effect
document.getElementById('figureWP').addEventListener('mouseover', function(){
    document.getElementById('WP').style.display = "block";
})

document.getElementById('figureWP').addEventListener('mouseleave', function(){
    document.getElementById('WP').style.display = "none";
})

// background color dark mode
function changeBackgroundColorIntoDarkMode() {
    document.body.style.backgroundColor = "#52504e";
    for(var i = 0; i < document.getElementsByClassName('drp-btn').length; i++) {
        document.getElementsByClassName('drp-btn')[i].style.backgroundColor = "#9fedd7";
    }
    for(var i = 0; i < document.getElementsByClassName('des').length; i++) {
        document.getElementsByClassName('des')[i].style.backgroundColor = "#52504e";
        document.getElementsByClassName('des')[i].style.borderColor = "#52504e";
    }
}

// background color light mode
function changeBackgroundColorIntoLightMode() {
    document.body.style.backgroundColor = "#ebf0d8";
    for(var i = 0; i < document.getElementsByClassName('drp-btn').length; i++) {
        document.getElementsByClassName('drp-btn')[i].style.backgroundColor = "#026670";
    }
    for(var i = 0; i < document.getElementsByClassName('des').length; i++) {
        document.getElementsByClassName('des')[i].style.backgroundColor = "#ebf0d8";
        document.getElementsByClassName('des')[i].style.borderColor = "#ebf0d8";
    }
}

// text color dark mode
function changeTextColorIntoDarkMode() {
    for(var i = 0; i < document.getElementsByClassName('prov-name').length; i++) {
        document.getElementsByClassName('prov-name')[i].style.color = "white";
    }
    for(var i = 0; i < document.getElementsByClassName('drp-btn').length; i++) {
        document.getElementsByClassName('drp-btn')[i].style.color = "black";
    }
    for(var i = 0; i < document.getElementsByClassName('prov-header').length; i++) {
        document.getElementsByClassName('prov-header')[i].style.color = "#9fedd7";
    }
    for(var i = 0; i < document.getElementsByClassName('prov-des').length; i++) {
        document.getElementsByClassName('prov-des')[i].style.color = "white";
    }
}

// text color light mode
function changeTextColorIntoLightMode() {
    for(var i = 0; i < document.getElementsByClassName('prov-name').length; i++) {
        document.getElementsByClassName('prov-name')[i].style.color = "black";
    }
    for(var i = 0; i < document.getElementsByClassName('drp-btn').length; i++) {
        document.getElementsByClassName('drp-btn')[i].style.color = "white";
    }
    for(var i = 0; i < document.getElementsByClassName('prov-header').length; i++) {
        document.getElementsByClassName('prov-header')[i].style.color = "#026670";
    }
    for(var i = 0; i < document.getElementsByClassName('prov-des').length; i++) {
        document.getElementsByClassName('prov-des')[i].style.color = "black";
    }
}