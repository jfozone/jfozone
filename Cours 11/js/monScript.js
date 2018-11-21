// Script cours 6 novembre 2018

// Exercice
$( "#numero1" ).click(function() {
	var i=0;

	while (i<100){
		i ++;
		console.log(i + " - Je maitrise les boucles");
		
	}

});

// Exercice
$( "#numero2" ).click(function() {
	var i=1000;

	while (i>54){
		console.log(i);
		i --;	
	}

});

// Exercice
$( "#numero3" ).click(function() {
	var i=0;

	while (i<10000){
		i+=2;
		console.log(i);
	}

});

// Exercice
$( "#numero4" ).click(function() {
	var i=0, j=0, ligne = "";

	while (i<10){
		i++;
		console.log("Décompte no: "+i);
		
		while(j<20){
			j++;
			ligne = ligne + " " + j;
		}
		console.log(ligne)
		ligne = "";
		j = 0;
	}

});

// Exercice
$( "#numero5" ).click(function() {
	var i=0, nbZero=0, nbUn = 0, nbRandom;

	while (i<100){
		nbRandom = Math.floor((Math.random() * 100) + 1);
		
		if (nbRandom === 0){
			nbZero ++;
			console.log("nb "+ i +" : " + nbRandom + "   *** Nb Zero: "+ nbZero)
		}
		else if (nbRandom === 1){
			nbUn ++;
			console.log("nb "+ i +" : " + nbRandom + "   *** Nb Un: "+nbUn)
		}
		else{
			console.log("nb "+ i +" : " + nbRandom)
		}
		i++;
	}

});

// Exercice
$( "#numero6" ).click(function() {
	var nombre, somme=0, sommeTxt = "";

	while (nombre !=0){

		nombre = Number(prompt("Entrez le nombre "));
		
		somme+=nombre;
		sommeTxt = sommeTxt + " + " + nombre;
		console.log("Sous-Total de "+sommeTxt + " = "+somme)
	}
	console.log("Total de "+sommeTxt + " = "+somme)

});

//Trouvez TOUS les nombres de Armstrong de moins de 1000
// On dénomme nombre de Armstrong un entier naturel qui est égal à la
// somme des cubes des chiffres qui le composent.  

//Exemple :  153 = = 13 + 53 + 33 = 1 + 125 + 27, est un nombre de Armstrong. 
$( "#numero7" ).click(function() {
	var i = 0, j, k, nb1=0, nb2=0, nb3=0, somme=0;

	while (i < 10000){
		if (i<10){
			nb1 = i;
		}
		if ((i>=10) && (i<100)){
			nb1 = Math.floor(i/10);
			nb2 = i-(nb1*10);
	//		console.log(i + " : " + nb1 + " et " + nb2);
		}
		else if ((i>=100) && (i<999)){
			nb1 = Math.floor(i/100);
			nb2 = Math.floor((i-(nb1*100))/10);
			nb3 = i-((nb1*100) + (nb2*10));
	//		console.log(i + " : " + nb1 + " et " + nb2+ " et " + nb3);
		}
		somme = (Math.pow(nb1,3) + Math.pow(nb2,3) + Math.pow(nb3,3));
		if (somme === i){
			console.log(i + " est Nb armstrong");
		}
		i++;
	}
});