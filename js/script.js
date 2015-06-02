$pseudo = document.getElementById("pseudo");
$message = document.getElementById("message");
$submit = document.getElementById("submit");
$messageAffiche = document.getElementById("messageAffiche");

function affiche(){
    $messageAffiche.innerHTML += "<p>" + $pseudo.value + " : " + $message.value + "</p>";    
}

$submit.onclick = affiche;

