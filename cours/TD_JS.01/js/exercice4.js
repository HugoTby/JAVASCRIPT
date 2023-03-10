/*
Créez un tableau nommé tab dont le premier élément est -2, le deuxième 1 et le
troisième 4 [-2,1,4]
Créez une fonction additionne prenant un argument x et renvoyant le résultat de
l'addition de x à 2
Créez une fonction affiche, appelée au clic sur le bouton, qui affiche dans des boîtes
d'alerte successivement le résultat de la fonction additionne appliqué au premier
élément, puis au dernier élément du tableau (en utilisant la propriété length).
*/


function additionne(x) {
    return x+2;
}

function affiche() {
    let tab = [-2,1,4];
    
    alert("La première valeur additionné a X est : "+additionne(tab[0]));
    alert("La deuxième valeur additionné a X est : "+additionne(tab[tab.length-1]));
}