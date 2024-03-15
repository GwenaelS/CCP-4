function openDevis(){
    // document.getElementById("petit-dejeuner").style.display = "none"
    // document.getElementById("plateau-repas").style.display = "none"
    // document.getElementById("buffets").style.display = "none"
    // document.getElementById("cocktails").style.display = "none"
    // document.getElementById("menus").style.display = "none"
    // document.getElementById("nous-contactez").style.display = "none"
    document.getElementsByTagName("main")[0].classList.add("hidden")
    document.getElementsByClassName("devis")[0].classList.remove("hidden")
}
function closeDevis(){
    // document.getElementById("petit-dejeuner").style.display = ""
    // document.getElementById("plateau-repas").style.display = ""
    // document.getElementById("buffets").style.display = ""
    // document.getElementById("cocktails").style.display = ""
    // document.getElementById("menus").style.display = ""
    // document.getElementById("nous-contactez").style.display = ""
    document.getElementsByClassName("devis")[0].classList.add("hidden")
    document.getElementsByTagName("main")[0].classList.remove("hidden")
}

   