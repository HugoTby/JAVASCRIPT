/*
Au click sur le bouton, lancer la fonction jourDeLaSemaine(). Cette fonction détermine le
jour de la semaine et affiche selon le cas dimanche, lundi, mardi... etc. jusqu'à samedi.
(utiliser switch case obligatoire)
*/

var buttonClick = document.getElementById('MaDivNum1');
buttonClick.addEventListener("click", jourDeLaSemaine);

function jourDeLaSemaine(evenement) {
    var date = new Date();
    switch (date.getDay()) {

        case 0: alert("Aujourd'hui, nous sommes : Dimanche");
                break;
        case 1: alert("Aujourd'hui, nous sommes : Lundi");
                break;
        case 2: alert("Aujourd'hui, nous sommes : Mardi");
                break;
        case 3: alert("Aujourd'hui, nous sommes : Mercredi");
                break;
        case 4: alert("Aujourd'hui, nous sommes : Jeudi");
                break;
        case 5: alert("Aujourd'hui, nous sommes : Vendredi");
                break;
        case 6: alert("Aujourd'hui, nous sommes : Samedi");
                break;
        default: alert("Erreur ! Le jour de la semaine n'a pas pu être déterminé.");

    }
}