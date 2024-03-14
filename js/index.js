function openDevis(){
    document.getElementById("petit-dejeuner").style.display = "none"
    document.getElementById("plateau-repas").style.display = "none"
    document.getElementById("buffets").style.display = "none"
    document.getElementById("cocktails").style.display = "none"
    document.getElementById("menus").style.display = "none"
    document.getElementById("nous-contactez").style.display = "none"
    document.getElementById("devis").classList.remove("form-hidden")[0]
}
function closeDevis(){
    document.getElementById("petit-dejeuner").style.display = ""
    document.getElementById("plateau-repas").style.display = ""
    document.getElementById("buffets").style.display = ""
    document.getElementById("cocktails").style.display = ""
    document.getElementById("menus").style.display = ""
    document.getElementById("nous-contactez").style.display = ""
    document.getElementById("devis").classList.add("form-hidden")[0]
}

   