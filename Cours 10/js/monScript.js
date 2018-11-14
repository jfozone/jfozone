// Script cours 6 novembre 2018
/*
//1.  Lire deux nombres et afficher le plus grand des deux.
var nombre1, nombre2;

nombre1 = Number (prompt("Entrez un premier nombre :"));

nombre2 = Number (prompt("Entrez un second nombre :"));

if (nombre1 > nombre2){
	alert(nombre1 +  " plus grand que " + nombre2)
}
else if (nombre1 < nombre2){
	alert(nombre1 +  " plus petit que " + nombre2)
}
if (nombre1 === nombre2){
	alert(nombre1 +  " est égal à " + nombre2)
}


//2.  Un marchand décide d’accorder une réduction de 15% à tout acheteur, si le
//    montant total de ses achats est plus grand que 200.00$. Écrire un algorithme
//    qui permet de calculer et d’afficher la réduction que chaque acheteur a droit,
//    connaissant le montant total des achats.
var montantAchats;

montantAchats = Number (prompt("Entrer montant total des achats: "));

if (montantAchats >= 200){
	alert("Vous avez une réduction de: $" + (montantAchats * .15));
}

else {
	alert("il faut acheter pour plus de $200 pour avoir droit à l'excompte");
}

// 3.  Lire deux nombres, si les deux nombres sont plus grands que 9 écrire 
//     le mot « BONJOUR » et si tel n’est pas le cas écrire « BONSOIR ».
var nombre1, nombre2;

nombre1 = Number (prompt("Entrez un premier nombre :"));

nombre2 = Number (prompt("Entrez un second nombre :"));

if ((nombre1 > 9) && (nombre2 > 9)){
	alert("BONJOUR")
}
else {
	alert("BONSOIR")
}

// 4.  Lire deux nombres. Vous devez diviser le premier nombre par le deuxième seulement
//     si le deuxième nombre est différent de zéro. Par contre si ce nombre est zéro 
//     inscrivez le message suivant :‘Division par zéro interdite.’, si ce nombre n’est 
//     pas zéro vous devez imprimer le résultat.
var nombre1, nombre2;

nombre1 = Number (prompt("Entrez un premier nombre :"));

nombre2 = Number (prompt("Entrez un second nombre :"));

if (nombre2 === 0){
	alert("Division par 0 impossible");	
}
else {
	alert("Division de: "+nombre1+" par "+nombre2+" = "+(nombre1/nombre2))
}

//  5.  Lire un degré de température. Si la température est comprise entre
//      -40 et -10 écrire « HAAAAAAAAA! Il fait froid». Sinon, écrire « Enfin
//      une belle journée! ».
var tempC;

tempC = Number (prompt("Entrez les degrés en Celsius :"));

if ((tempC > -40) && (tempC < -10)){
	alert("HAAAAAAAAA! Il fait froid");
}
else if(tempC >= -10){
	alert("Enfin une belle journée");
}
else{
	alert("C'est le pole Nord :");
}

//6.   Lire une note au clavier et afficher la lettre correspondante.
//     90 et plus : A
//     Entre 80 et 90 : B
//     Entre 70 et 80 : C
//     Entre 60 et 70 : D
//     Moins de 60 : E

//   * Codez l’exercice #6 2 fois, une fois en débutant le IF par la cote A
//     et une fois par la cote E (en sens inverse).
var note;

note = Number (prompt("Entrez la note :"));

if(note >= 90){
	alert("Cote: A");
}
else if ((note >= 80) && (note < 90)){
	alert("Cote: B");
}
else if ((note >= 70) && (note < 80)){
	alert("Cote: C");
}
else if ((note >= 60) && (note < 70)){
	alert("Cote: D");
}
else if(note < 60){
	alert("Cote: E");
}

// Sens inverse
if(note < 60){
	alert("Cote: E");
}
else if ((note >= 60) && (note < 70)){
	alert("Cote: D");
}
else if ((note >= 70) && (note < 80)){
	alert("Cote: C");
}
else if ((note >= 80) && (note < 90)){
	alert("Cote: B");
}
if(note >= 90){
	alert("Cote: A");
}
 
// 7.    Lire un nombre au clavier. Afficher la catégorie (Positif, Négatif 
//       ou Zéro à l’écran)
var note;

note = Number (prompt("Entrez le nombre :"));

if(note > 0){
	alert("Positif");
}
else if (note < 0){
	alert("Négatif");
}
else{
	alert("Zéro");
	console.log("Zéro");
}
 
// 8.    Faire un programme qui lit le taux horaire et le nombre d’heures 
//       travaillées d’un employé. Affichez son salaire. (Attention, il est payé
//       le double de son taux horaire pour toutes les heures supplémentaires travaillées.
//       Une semaine de travail normale est de 40 heures.
var taux, nHeures;

taux = Number (prompt("Entrez le taux horaire :"));
nbHeures = Number (prompt("Entrez le nombre d'heures :"));

if(nbHeures > 40){
	alert("Salaire: "+((40*taux)+((nbHeures-40)*(taux*2))));
}
else{
	alert("Salaire: "+(nbHeures*taux));
}

// 9.    Faire un programme qui lit un nom d’utilisateur et un mot de passe. Si le nom 
//       d’utilisateur est “admin” et le mot de passe “12345”, affichez le message suivant :
//       « Bonjour [nom de l’utilisateur] ». Si les informations ne sont pas correctes, affichez
//       le message suivant : « Votre nom d’utilisateur ou votre mot de passe est invalide ».
var user, pw;

user = prompt("Entrez user :");
pw = prompt("Entrez mot de passe :");

if((user === "admin") && (pw === "12345")){
	alert("Bonjour "+user);
}
else{
	alert("Votre nom d’utilisateur ou votre mot de passe est invalide");
	console.log("Votre nom d’utilisateur ou votre mot de passe est invalide");
}
 */
// 10.   Lire un nombre entier au clavier et afficher le nom du mois correspondant. Si le 
//       nombre saisi ne correspond pas à un mois, affichez le message suivant : « Mois invalide ».
var noMois, month = new Array();

month[0] = "vide";
month[1] = "Janvier";
month[2] = "Février";
month[3] = "Mars";
month[4] = "Avril";
month[5] = "Mai";
month[6] = "Juin";
month[7] = "Juillet";
month[8] = "Août";
month[9] = "Septembre";
month[10] = "Octobre";
month[11] = "Novembre";
month[12] = "Décembre";

noMois = Number(prompt("Entrez le no du mois :"));

if((noMois > 0) && (noMois <=12)){
	alert("Le mois choisi est: "+month[noMois]);
}
else{
	alert("Mois invalide");
	console.log("Mois invalide");
}


/* =======================================
// 1 - Lire un nombre et afficher le carré et le cube de ce nombre.


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
*/
