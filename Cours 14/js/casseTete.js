var premierClique = true;
var imgClick1,nbHits=0;

$('.img-fluid').click(function(){

	if (premierClique === true){
		imgClick1 = $(this).attr('src');
		premierClique = $(this).attr('id');
		$(this).hide();
	}
	else{
		$('#'+premierClique).attr('src',$(this).attr('src'));
		$(this).attr('src',imgClick1);
		$('#'+premierClique).show();
		premierClique = true;
		nbHits ++;
		console.log(nbHits);
		Victoire();
	}
});

$('#boutonRecommencer').click(function(){

	$('#victoire').remove();
	$('#image1').attr('src','images/3.jpg');
	$('#image2').attr('src','images/7.jpg');
	$('#image3').attr('src','images/6.jpg');
	$('#image4').attr('src','images/5.jpg');
	$('#image5').attr('src','images/1.jpg');
	$('#image6').attr('src','images/4.jpg');
	$('#image7').attr('src','images/9.jpg');
	$('#image8').attr('src','images/2.jpg');
	$('#image9').attr('src','images/8.jpg');

});

$('#boutonTricher').click(function(){

	$('#image1').attr('src','images/1.jpg');
	$('#image2').attr('src','images/2.jpg');
	$('#image3').attr('src','images/3.jpg');
	$('#image4').attr('src','images/4.jpg');
	$('#image5').attr('src','images/5.jpg');
	$('#image6').attr('src','images/6.jpg');
	$('#image7').attr('src','images/7.jpg');
	$('#image8').attr('src','images/8.jpg');
	$('#image9').attr('src','images/9.jpg');
	Victoire();

});

function Victoire() {

	if ($('#image1').attr('src').endsWith('1.jpg')
		&& $('#image2').attr('src').endsWith('2.jpg')
		&& $('#image3').attr('src').endsWith('3.jpg')
		&& $('#image4').attr('src').endsWith('4.jpg')
		&& $('#image5').attr('src').endsWith('5.jpg')
		&& $('#image6').attr('src').endsWith('6.jpg')
		&& $('#image7').attr('src').endsWith('7.jpg')
		&& $('#image8').attr('src').endsWith('8.jpg')
		&& $('#image9').attr('src').endsWith('9.jpg')){

	// insert div victoire
     ( $( "<div id='victoire'><h1>Nb coups: "+nbHits+"</h1><h2>VICTOIRE</h2><br/> <img src='images/victoire.jpg' /></div>" ) ).insertBefore($( "#premiereRangee" ));
  
	}
}