function countToTen() {
    var count = 0;
    while (count < 10) {
        count++;
        document.getElementById("theCount").innerHTML += count + "<br>";
    }
}


// Chaine de caractère
var MVString = "toto";

// Nombre
var MVNumerique = 100;

// Tableaux
var MVTab = ['Apple','Banana'];

// Objet
var MVObjet = window;

// Affichage final en notification
alert(MVString + MVNumerique + MVTab[0]+MVObjet.location.pathname);




// Les variables

/*

const -> Constante

let -> Variable locale

var -> Variable globale

*/





/*
var MVString2 = "toto";

var MVNumerique2 = prompt("Saisissez une valeur :\n", 100);

if (MVString2 == "toto" && MVNumerique2 !=200 || MVNumerique2 <=100) {
    alert("Mais c'est quoi le rapport ???");
} else {
    alert("Je suis le cas 2");
}
*/