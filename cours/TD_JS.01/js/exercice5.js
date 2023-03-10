/*
Au click sur le premier bouton, lancez la fonction boucle() qui crée un tableau de 3
éléments et utilise une boucle for pour le remplir de sorte que l'élément à l’indice i du
tableau contienne la valeur de i². Affichez le tableau dans une boîte d'alerte.
Au click sur le second bouton, lancez la fonction boucle2() qui demande à l'utilisateur
via un prompt de saisir la longueur souhaitée du tableau, puis crée ce tableau et utilise
une boucle for pour le remplir de sorte que l'élément i du tableau contienne i². Affichez
le tableau dans une boîte d'alerte.
*/

function boucle(evenement) {
    const tab = new Array(3);
    for (let i = 0; i < 3; i++) {
        tab[i]=i*i;
    }
    alert("Les éléments du tableau sont : \n->"+tab[0]+"\n->"+tab[1]+"\n->"+tab[2]+"\n");
}

function boucle2(evenement) {
    let saisie = prompt("Saisissez une longueur :\n");
    const tab2 = new Array(saisie);
    for (let i = 0; i < saisie; i++) {
        tab2[i]=i*i;
    }
    alert("Les éléments du tableau sont : \n->"+tab2);
}   