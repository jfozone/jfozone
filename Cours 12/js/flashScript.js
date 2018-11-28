// Script cours 27 novembre 2018

//Déplacer Gauche
$( "#boutonGauche" ).click(function() {

	$("#flashID").css("padding-left","0px");
});

//Déplacer Droite
$( "#boutonDroite" ).click(function() {
	$("#flashID").css("padding-left","500px");
	
});

//Changer image" 
//Changez l'image de Flash1 à Flash 2 et vice-versa (une fois).
$( "#boutonChangerImage" ).click(function() {
	var currentImg;

	curentImg = $("#flashID").attr("src");
	console.log(currentImg);
	alert($("#flashID").attr("src"));
	if (currentImg === "medias/flash.jpg"){
			$("#flashID").attr("src","medias/flash2.jpg");
	}

});

//Enlever l'image
//Faire disparaître l'image (fadeOut)
$( "#boutonEnleverImage" ).click(function() {
	
});

//Afficher l'image" 
//Faire apparaître l'image (fadeIn)
$( "#boutonAjouterImage" ).click(function() {
	
});
		
//Ajouter attribut
//Ajoutez un attribut alt à votre image avec la description 'photo de Flash
$( "#boutonAjouterAttribut" ).click(function() {
	
});
		
//Ajouter Titre" 
//Ajoutez un titre en H1 'FLASH JQUERY' dans le haut de cette page 
//avant la photo (before)
$( "#boutonAjouterTitre" ).click(function() {
	
});
		
//Dupliquer
//Flash est tellement rapide, ajoutez une autre image à côté de Flash à tous les cliques sur ce bouton!<br />
$( "#boutonDupliquer" ).click(function() {
	
});

//Ralentir
//Flash ralentit, enlevez une image!
$( "#boutonRalentir" ).click(function() {
	
});

//Teleport
//Flash se téléporte sous ces boutons et retourne en haut lorsque l'on clique de 
//nouveau
$( "#boutonTeleport" ).click(function() {
	
});

//VitesseSupreme
//Flash doit apparaître et disparaître toutes les 500MS pendant 5 secondes.
$( "#boutonVitesseSupreme" ).click(function() {
	
});

//Nuke
//Ce bouton fait afficher une image d'explosion dans l'écran et enlève tout le reste
//(boutons images, etc).
$( "#boutonNuke" ).click(function() {
	
});
