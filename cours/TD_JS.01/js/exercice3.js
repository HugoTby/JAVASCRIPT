/*
Créez deux variables globales a et b, initialisées respectivement à 3 et à 2.
Créez une fonction multiplie prenant un argument x prenant comme valeur par défaut 8,
et renvoyant le résultat de la multiplication de x par 3
Pour mettre une valeur par default à une variable il faut lui mettre variable =
valeurPardefaut ici lenomdelafonction(paramètreA = 8){ ....
Créez une fonction affiche, appelée au clic sur un bouton, qui affiche dans des boîtes
d'alerte successivement le résultat de la fonction multiplie appliquée a, à b, puis sans
aucun paramètre (en exécutant donc la fonction avec la valeur de x par défaut sans lui
envoyer de paramètre)
*/



// Init variables
var a = 3;
var b = 2;


function multiplie(x=8){
    
    return x*3;

}


function affiche(evenement){
    
    alert("La valeur de A est : "+multiplie(a));
    alert("La valeur de B est : "+multiplie(b));
    alert("La valeur de EMPTY est : "+multiplie());

}
