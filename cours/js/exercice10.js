var MaDiv = document.getElementById("MaDivNum1");

MaDiv.addEventListener("click", changement);

function changement(evenement) {
    evenement.target.innerHTML = "On m'a cliqué dessus !";
}

// EventListener

var compteur = 0;
var compteur2 = 0;

var MaDiv2 = document.getElementById("Methode1");
MaDiv2.addEventListener("click", changementEcriture);

var MaDiv2 = document.getElementById("Methode2");
MaDiv2.addEventListener("mouseover", survole);

var MaDiv2 = document.getElementById("Methode3");
MaDiv2.addEventListener("keydown", ecriture);



function ecriture(evenement) {
    evenement.target.innerHTML = "On a cliqué sur : "+evenement.key+" !";
}

function changementEcriture(evenement) {
    compteur++;
    evenement.target.innerHTML = "On m'a cliqué dessus "+compteur+" fois !";
}

function survole(evenement) {
    compteur2++;
    evenement.target.innerHTML = "On m'a survolé "+compteur2+" fois !";
}



// Exercices


var MaDiv4 = document.getElementById("Methode4");
MaDiv4.addEventListener("click", changementDiv);

var MaDiv5 = document.getElementById("Methode5");
MaDiv5.addEventListener("mouseover", visibilite);


function changementDiv(evenement) {
    if (evenement.target.className === "class1") {
        evenement.target.className = "class2";
    } else {
        evenement.target.className = "class1";
    }
}

function visibilite(evenement) {
    MaDiv5.style.backgroundColor = 'rgba(255, 255, 255, .4)';
    MaDiv5.innerHTML = '';
}