<!-- Cachons ce script des navigateurs 
//   ne reconnaissant pas JavaScript

// Date du jour
aujourdhui = new Date()

// Num�ro du mois
mois = aujourdhui.getMonth()

// Recherche de la cha�ne de caract�res correspondante
var mois_en_lettres

switch(mois)
{ case 0 : mois_en_lettres = " janvier "; break
  case 1 : mois_en_lettres = " f�vrier "; break
  case 2 : mois_en_lettres = " mars "; break
  case 3 : mois_en_lettres = " avril "; break
  case 4 : mois_en_lettres = " mai "; break
  case 5 : mois_en_lettres = " juin "; break
  case 6 : mois_en_lettres = " juillet "; break
  case 7 : mois_en_lettres = " ao�t "; break
  case 8 : mois_en_lettres = " septembre "; break
  case 9 : mois_en_lettres = " octobre "; break
  case 10 : mois_en_lettres = " novembre "; break
  case 11 : mois_en_lettres = " d�cembre "; break
}
document.write("Nous sommes le " + aujourdhui.getDate() 
               + mois_en_lettres + aujourdhui.getFullYear())

// Fin de la dissimulation du script  -->
