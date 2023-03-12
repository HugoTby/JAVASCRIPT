/*
Les changements de couleurs d'une zone de texte font appel à onmouseover,
onmouseout, onclick et ondblclick, ainsi qu'aux méthodes de contrôle du style par
JavaScript appliquées à l'objet courant indiqué par this.
Exemple : onmouseover="this.style.color='blue'" à placer dans la balise
Ecrire une phrase HTML de couleur noire au chargement et qui doit prendre la couleur :
-rouge au passage de la souris ;
-citron vert (lime) en réponse à un click ;
-bleu marine (navy) en réponse à un double click.
*/

var DivOnClick = document.getElementById('MaDivNum1');
var id;

DivOnClick.addEventListener("mouseover", function(evenement) {
  id = 1; 
  color(evenement, id);
});

DivOnClick.addEventListener("click", function(evenement) {
    id = 2; 
    color(evenement, id);
});

DivOnClick.addEventListener("dblclick", function(evenement) {
    id = 3; 
    color(evenement, id);
});

function color(evenement, id)
{
    if (id == 1)
    {
        evenement.target.style.color = "red";
    }
    else if (id == 2)
    {
        evenement.target.style.color = "lime";
    }
    else if (id == 3)
    {
        evenement.target.style.color = "navy";
    }
}