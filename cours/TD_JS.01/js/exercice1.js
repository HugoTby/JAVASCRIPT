/* 
En cliquant sur un bouton demander à utilisateur de saisir une longueur et une largeur
(prompt) et afficher le résultat du périmètre puis de l’air d’un rectangle (alert())
Améliorer le code pour que ce soit une fonction qui soit appelé au clic du bouton
*/

function saisie(){
    
    var longueur = prompt("Saisissez une longueur :\n");
    var largeur = prompt("Saisissez une largeur :\n");

    let perimetre = longueur*2 + largeur*2 ;
    let aire = longueur*largeur ;
    alert("Le périmètre est de "+perimetre+" et l'aire est de "+aire);;
}
