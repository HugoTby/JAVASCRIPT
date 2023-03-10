/*
En cliquant sur un bouton demander à utilisateur de saisir une longueur
(prompt) et afficher le résultat du périmètre puis de l’air d’un cercle (alert())
Améliorer le code pour que ce soit une fonction qui soit appelé au clic du bouton
*/


function saisie(){
    
    // Saisie
    var longueur = prompt("Saisissez une longueur :\n");

    // Calcul
    let perimetre = longueur*Math.PI ;
    let aire = (longueur/2)*Math.PI ;
    alert("Le périmètre est de "+perimetre+" et l'aire est de "+aire);;
}
