// Script cours 6 novembre 2018

//1.  Lire deux nombres et afficher le plus grand des deux.
$( "#numero1" ).click(function() {
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
});

//2.  Un marchand décide d’accorder une réduction de 15% à tout acheteur, si le
//    montant total de ses achats est plus grand que 200.00$. Écrire un algorithme
//    qui permet de calculer et d’afficher la réduction que chaque acheteur a droit,
//    connaissant le montant total des achats.
$( "#numero2" ).click(function() {
	var montantAchats;

	montantAchats = Number (prompt("Entrer montant total des achats: "));

	if (montantAchats >= 200){
		alert("Vous avez une réduction de: $" + (montantAchats * .15));
	}

	else {
		alert("il faut acheter pour plus de $200 pour avoir droit à l'excompte");
	}
});

// 3.  Lire deux nombres, si les deux nombres sont plus grands que 9 écrire 
//     le mot « BONJOUR » et si tel n’est pas le cas écrire « BONSOIR ».
$( "#numero3" ).click(function() {
	var nombre1, nombre2;

	nombre1 = Number (prompt("Entrez un premier nombre :"));

	nombre2 = Number (prompt("Entrez un second nombre :"));

	if ((nombre1 > 9) && (nombre2 > 9)){
		alert("BONJOUR")
	}
	else {
		alert("BONSOIR")
	}
});

// 4.  Lire deux nombres. Vous devez diviser le premier nombre par le deuxième seulement
//     si le deuxième nombre est différent de zéro. Par contre si ce nombre est zéro 
//     inscrivez le message suivant :‘Division par zéro interdite.’, si ce nombre n’est 
//     pas zéro vous devez imprimer le résultat.
$( "#numero4" ).click(function() {
	var nombre1, nombre2;

	nombre1 = Number (prompt("Entrez un premier nombre :"));

	nombre2 = Number (prompt("Entrez un second nombre :"));

	if (nombre2 === 0){
		alert("Division par 0 impossible");	
	}
	else {
		alert("Division de: "+nombre1+" par "+nombre2+" = "+(nombre1/nombre2))
	}
});

//  5.  Lire un degré de température. Si la température est comprise entre
//      -40 et -10 écrire « HAAAAAAAAA! Il fait froid». Sinon, écrire « Enfin
//      une belle journée! ».
$( "#numero5" ).click(function() {
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
});

//6.   Lire une note au clavier et afficher la lettre correspondante.
//     90 et plus : A
//     Entre 80 et 90 : B
//     Entre 70 et 80 : C
//     Entre 60 et 70 : D
//     Moins de 60 : E

//   * Codez l’exercice #6 2 fois, une fois en débutant le IF par la cote A
//     et une fois par la cote E (en sens inverse).
$( "#numero6A" ).click(function() {
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
});

// Sens inverse
$( "#numero6B" ).click(function() {
	var note;

	note = Number (prompt("Entrez la note :"));

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
}); 
// 7.    Lire un nombre au clavier. Afficher la catégorie (Positif, Négatif 
//       ou Zéro à l’écran)
$( "#numero7" ).click(function() {
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
});

// 8.    Faire un programme qui lit le taux horaire et le nombre d’heures 
//       travaillées d’un employé. Affichez son salaire. (Attention, il est payé
//       le double de son taux horaire pour toutes les heures supplémentaires travaillées.
//       Une semaine de travail normale est de 40 heures.
$( "#numero8" ).click(function() {
	var taux, nHeures;

	taux = Number (prompt("Entrez le taux horaire :"));
	nbHeures = Number (prompt("Entrez le nombre d'heures :"));

	if(nbHeures > 40){
		alert("Salaire: "+((40*taux)+((nbHeures-40)*(taux*2))));
	}
	else{
		alert("Salaire: "+(nbHeures*taux));
	}
});

// 9.    Faire un programme qui lit un nom d’utilisateur et un mot de passe. Si le nom 
//       d’utilisateur est “admin” et le mot de passe “12345”, affichez le message suivant :
//       « Bonjour [nom de l’utilisateur] ». Si les informations ne sont pas correctes, affichez
//       le message suivant : « Votre nom d’utilisateur ou votre mot de passe est invalide ».
$( "#numero9" ).click(function() {
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
});
// 10.   Lire un nombre entier au clavier et afficher le nom du mois correspondant. Si le 
//       nombre saisi ne correspond pas à un mois, affichez le message suivant : « Mois invalide ».
$( "#numero10" ).click(function() {
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
});