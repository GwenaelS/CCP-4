let contactForm = document.forms["formContact"]

// if(document.forms["formContact"].nom.value){}
// if(document.forms["formContact"].societe.value){}
// if(document.forms["formContact"].email.value){}
// if(document.forms["formContact"].telephone.value){}
// if(document.forms["formContact"].message.value){}

function returnContact(){
    let message = ""
    message = "Votre nom est : " + document.forms["formContact"].nom.value + "\n" + 
    "Vous êtes de la socièté : " + document.forms["formContact"].societe.value + "\n" +
    "Votre email : " + document.forms["formContact"].email.value + "\n" +
    "Votre numéro de téléphone : " + document.forms["formContact"].telephone.value + "\n" + 
    "Votre message : " + document.forms["formContact"].message.value
    alert(message)
}
