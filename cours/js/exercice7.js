function addition(nb1, nb2)
{
    return nb1 + nb2;
}

// Saisie des valeurs
var number1 = prompt("Veuillez saisir un premier chiffre :");
var number2 = prompt("Veuillez saisir un deuxième chiffre :");

// Conversion des caractères
var valeur1 = parseInt(number1);
var valeur2 = parseInt(number2);

// Affichage du résultat via la fonction
alert("Resultat : " + addition(valeur1, valeur2));