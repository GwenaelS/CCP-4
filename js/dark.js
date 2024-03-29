let darkModeEnabled = false
const darkModeButton = document.getElementById("darkModeButton")

darkModeButton.addEventListener("click", function(){

    darkModeEnabled = !darkModeEnabled
    if(darkModeEnabled){
        enableDarkMode()
    }else {
        disableDarkMode()
    }
})

function enableDarkMode() {
    document.getElementById("plateau-repas").style.backgroundColor = "rgb(25, 25, 25)"
    document.getElementById("plateau-repas").style.color = "white"
    document.getElementById("cocktails").style.backgroundColor = "rgb(25, 25, 25)"
    document.getElementById("cocktails").style.color = "white"
    document.getElementById("cocktails-a").style.color = "white"
    document.getElementById("nous-contactez").style.backgroundColor = "rgb(25, 25, 25)"
    document.getElementById("nous-contactez").style.color = "white"
    document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(25, 25, 25)"
    document.getElementsByTagName("body")[0].style.color = "white"
    document.getElementById("footer-a").style.color = "white"
    document.querySelector("footer").style.borderTop = "solid 2px white"
    document.getElementById("reception").style.backgroundColor = "rgb(25, 25, 25)"
    document.getElementById("services").style.backgroundColor = "rgb(25, 25, 25)"
    document.getElementById("budget").style.backgroundColor = "rgb(25, 25, 25)"
    document.getElementById("coordonnees").style.backgroundColor = "rgb(25, 25, 25)"
    document.forms["devis"].style.borderColor = "white"
}
function disableDarkMode() {
    document.getElementById("plateau-repas").style.backgroundColor = "rgb(208, 205, 205)"
    document.getElementById("plateau-repas").style.color = "black"
    document.getElementById("cocktails").style.backgroundColor = "rgb(208, 205, 205)"
    document.getElementById("cocktails").style.color = "black"
    document.getElementById("cocktails-a").style.color = "black"
    document.getElementById("nous-contactez").style.backgroundColor = "rgb(208, 205, 205)"
    document.getElementById("nous-contactez").style.color = "black"
    document.getElementsByTagName("body")[0].style.backgroundColor = "white"
    document.getElementsByTagName("body")[0].style.color = "black"
    document.getElementById("footer-a").style.color = "black"
    document.querySelector("footer").style.borderTop = "solid 2px black"
    document.getElementById("reception").style.backgroundColor = "rgb(208, 205, 205)"
    document.getElementById("services").style.backgroundColor = "rgb(208, 205, 205)"
    document.getElementById("budget").style.backgroundColor = "rgb(208, 205, 205)"
    document.getElementById("coordonnees").style.backgroundColor = "rgb(208, 205, 205)"
    document.forms["devis"].style.borderColor = "black"
}