// Script cours 6 novembre 2018

// 1 - Lire un nombre et afficher le carré et le cube de ce nombre.
/*
var nombre;

nombre = Number (prompt("Entrez un nombre :"));

alert("Valeur carré: " + (nombre * nombre) + 
	 "\nValeur cube: " + (nombre * nombre * nombre));


// 2 - Calculer la surface d’un rectangle dont la longueur et la largeur sont lues à l’écran. 
var longueur, largeur;

longueur = Number (prompt("Entrez la longueur :"));
largeur = Number (prompt("Entrez la largeur :"));

alert("Surface: " + (longueur * largeur));

// 3 - Convertir un nombre de gallons en litres. 1 gal = 4.55 litres
var gallon;

gallon = Number (prompt("Entrez gallons :"));

alert("Litres: " + (gallon * 4.55));

// 4 - Calculer le salaire brut d’un employé. Il est payé à l’heure et les données concernant
//     le taux horaire et le nombre d’heures travaillées sont fournies en entrée.
var nbHeures, taux;

nbHeures = Number (prompt("Entrez nombre d'heures :"));
taux = Number (prompt("Entrez taux :"));

alert("Salaire brut: " + (nbHeures * taux));

// 5 - Lire le nom et l’âge d’un individu, puis convertir son âge en jours (approximatif). 
//     Imprimer un message incluant son nom pour l’informer du nombre de jours vécus.
var nom, age;

nom = prompt("Entrez nom :");
age = Number (prompt("Entrez age :"));

alert("Bonjour: " + nom +
	  "\nvous avez vécu " + (age * 365) + " jours");

// 2-1 Faites un programme qui lit le nom d’un article et son prix de détail.Votre programme
//     doit afficher le prix de gros (66% du prix de détail) ainsi que le profit attendu.
var article, prix, cost;

article = prompt("Entrez nom de l'article :");
prix = Number (prompt("Entrez prix de détail :"));
cost = (prix * .66);

alert("L'article " + article +
	  "\nCoûte: $ "+ cost +
	  "\nProfit: $" + (prix-cost));

// 2-2 Programmer un convertisseur Degré Celsius -> Fharenheit.
var degres;

degres = Number (prompt("Entrez degrés C :"));

alert(degres + " degres C donne " + ((degres * (9/5))+32) + " F");

// 2-3 Programmer un convertisseur Fharenheit -> Degré Celsius.
var degres;

degres = Number (prompt("Entrez degrés F :"));

alert(degres + " degres F donne " + ((degres -32)* (5/9)) + " C");


// 3-1
// Écrire un algorithme qui calcule la note finale d’un étudiant. Cette note est dérivée des
// trois notes suivantes : note à l’examen de mi-session qui compte pour 30% de la note finale,
// note de l’examen de fin session qui compte pour 50% et la note de laboratoire qui compte pour 20%.

// Lire les quatre éléments d’information suivants : le nom de l’étudiant, la note de laboratoire,
// la note de l’examen de mi-session et la note de l’examen de fin de session. Toutes les notes lues
//  sont sur 100. Imprimer le nom suivi des trois notes lues qui ont été ramenées sur le pourcentage 
//  demandé ci-dessus, et de la note finale. Le tout sur des lignes différentes accompagné de messages clairs.

var nom, noteLabo, noteMid, noteFin;

nom = prompt("Entrez nom de l'étudiant :");
noteLabo = Number (prompt("Entrez note laboratoire :"));
noteMid = Number (prompt("Entrez note de mi-session :"));
noteFin = Number (prompt("Entrez note de fin de session :"));


alert("Résultats pour " + nom +
	  "\nNote Laboratoire "+ noteLabo +
	  "\nNote Mi-Session "+ noteMid +
	  "\nNote Fin de Session "+ noteFin +
	  "\nNote finale: " + ((noteLabo*.2) + (noteMid*.3) + (noteFin * .5) ) + "%");

//  4-1
// Créez un convertisseur d'unités de mesures.
// L'usager entre les dimensions de son terrain en pi2.
// Vous affichez les dimensions en m2, arpents2, hectares.

var superficie;

superficie = Number (prompt("Entrez superficie en pi carrés :"));

alert(superficie + " pi carré vaut:" + 
	  "\n" + (superficie/10.764) + " m carrés" +
	  "\n" + (superficie/36799.021) + " arpents carrés" +
	  "\n" + (superficie/107639.104) + " hectares" );
*/
// 4-2
// Fonction quadratique.
// L'usager entre A,B,C,X, vous trouvez Y.
// Rappel : Y = AX2 + BX + C  
var a, b, c;

a = Number (prompt("Entrez a :"));
b = Number (prompt("Entrez b :"));
c = Number (prompt("Entrez c :"));
x = Number (prompt("Entrez x :"));

alert("pour x = " + x + " et a = " + a + " b = " + b + " c = " + c +
	  "\ny = " + ((a*x*x) + (b*x) + c));

