/*
En cliquant sur un bouton demander à utilisateur de saisir une longueur
(prompt) et afficher le résultat du périmètre puis de l’air d’un cercle (alert())
Améliorer le code pour que ce soit une fonction qui soit appelé au clic du bouton
*/


function saisie(){
    
    // Saisie
    var diametre = prompt("Saisissez un diamètre :\n");

    // Calcul
    let perimetre = diametre*Math.PI ;
    let aire = ((diametre/2)*(diametre/2))*Math.PI ;
    alert("Le périmètre de "+diametre+" est de "+perimetre+" et l'aire de "+diametre+" est de "+aire);;
}
