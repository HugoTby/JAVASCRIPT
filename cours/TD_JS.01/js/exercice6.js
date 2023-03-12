/*
Créez un tableau nommé tab dont le premier élément est -2, le deuxième 1 et le
troisième 4
Créez une fonction soustrait prenant un argument x et renvoyant le résultat de la
soustraction de x-2 si x est positif ou nul sinon la chaîne de caractères "Nombre négatif!".
Créez une fonction affiche, appelée au clic sur le bouton, qui affiche dans des boîtes
d'alerte successivement le résultat de soustrait appliqué au premier élément, puis au
dernier élément du tableau (en utilisant la propriété length).
*/

var tab = [-2, 1, 4];


function soustrait(x) 
{
    if (x >= 0)
    {
        return x - 2;
    }
    else
    {
        return "Nombre négatif !";
    }

}



var buttonClick = document.getElementById('MaDivNum1');
buttonClick.addEventListener("click", affiche);

function affiche(evenement) 
{
    for (let i = 0; i < tab.length; i++)
    {
        alert(soustrait(tab[i]));   
    }
}

