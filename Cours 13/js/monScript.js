$("#boutonEnvoyer").click(function() {
    //Un champ Input
    //alert($('#email').val());

    //Un champ select unique
    //alert($( "#selectUnique").val());
    //alert($( "select#selectUnique").val());

    //Un checkBox
    //alert($( "input[type=checkbox][id=defaultCheck1]:checked" ).val());
    //alert($('#defaultCheck1').prop('checked'));

    //Boutons RADIO
    //alert($( "input[type=radio][name=exampleRadios]:checked" ).val());
});

//Change est appelée une seule fois lorsque l'on sort du champ
$( "#email" ).change(function() {
    //console.log($('#email').val());
});

$( "#email" ).keydown(function() {
    //console.log($('#email').val());
});

$( "#email" ).keyup(function() {
    //console.log($('#email').val());
    $('#alerteEmail').show();
});

