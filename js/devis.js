function returnDevis(){
    let message = ""
    message = "Votre nom est : " + document.forms["devis"].nom.value + "\n" + 
    "Votre prénom est : " + document.forms["devis"].prenom.value + "\n" +
    "Vous êtes de la société : " + document.forms["devis"].societe.value + "\n" +
    "Votre adresse : " + document.forms["devis"].adresse.value + "\n" +
    "Votre numéro de téléphone : " + document.forms["devis"].telephone.value + "\n" + 
    "Votre email : " + document.forms["devis"].email.value
    alert(message)
}