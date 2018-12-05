// Script cours 27 novembre 2018

var imgSpaceActive = 1;
//$("#imgSpace2").css("visibility","hidden");	
$("#imgSpace2").hide();	

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

	currentImg = $('#flashID').attr('src');
	if (currentImg === "medias/flash.jpg"){
		$("#flashID").attr("src","medias/flash2.jpg");
		$("#flashID2").attr("src","medias/flash2.jpg");
	}
	else {
		$("#flashID").attr("src","medias/flash2.jpg");
		$("#flashID2").attr("src","medias/flash.jpg");
	}
});

//Enlever l'image
//Faire disparaître l'image (fadeOut)
$( "#boutonEnleverImage" ).click(function() {
	$("#flashID").fadeOut();	
});

//Afficher l'image" 
//Faire apparaître l'image (fadeIn)
$( "#boutonAjouterImage" ).click(function() {
	$("#flashID").fadeIn();		
});
		
//Ajouter attribut
//Ajoutez un attribut alt à votre image avec la description 'photo de Flash'
$( "#boutonAjouterAttribut" ).click(function() {
	$("#flashID").attr('title','photo de Flash');			
});
		
//Ajouter Titre" 
//Ajoutez un titre en H1 'FLASH JQUERY' dans le haut de cette page 
//avant la photo (before)
$( "#boutonAjouterTitre" ).click(function() {
	$("#titre1").html('<h1>Flash le héro</h1>');			
});
		
//Dupliquer
//Flash est tellement rapide, ajoutez une autre image à côté de Flash à tous les cliques sur ce bouton!<br />
$( "#boutonDupliquer" ).click(function() {
	$("#imgSpace").append('<img id="flashID" class="flashClass" src="medias/flash.jpg" width="200px"/>');
});

//Ralentir
//Flash ralentit, enlevez une image!
$( "#boutonRalentir" ).click(function() {
	$("#flashID").remove();	
});

//Teleport
//Flash se téléporte sous ces boutons et retourne en haut lorsque l'on clique de 
//nouveau
$( "#boutonTeleport" ).click(function() {
	
	if (imgSpaceActive === 1){
		$("#imgSpace").fadeOut();	
		$("#imgSpace2").fadeIn();	
		$("#imgSpace2").css("visibility","visible");	
		imgSpaceActive = 2;
	}
	else {
		$("#imgSpace2").fadeOut();	
		$("#imgSpace").fadeIn();	
		imgSpaceActive = 1;
	}
});

//VitesseSupreme
//Flash doit apparaître et disparaître toutes les 500MS pendant 5 secondes.
$( "#boutonVitesseSupreme" ).click(function() {
	var imgSpaceName, nbSec = 5;

	if (imgSpaceActive === 1){
		imgSpaceName = "#imgSpace";
	}
	else {
		imgSpaceName = "#imgSpace2";
	}
	while (nbSec > 0){
		$(imgSpaceName).delay(500).fadeOut();	
		$(imgSpaceName).delay(500).fadeIn();	
		nbSec --;
	}
});

//Nuke
//Ce bouton fait afficher une image d'explosion dans l'écran et enlève tout le reste
//(boutons images, etc).
$( "#boutonNuke" ).click(function() {
		$("#bloc1").html('<img src="medias/favicon.png" width="400px"/>');
	
});
