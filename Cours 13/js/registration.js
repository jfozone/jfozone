// Validation usager
$( "#userId" ).change(function() {
    console.log($('#userId').val());
    if (($('#userId').val() === "SLAY") || ($('#userId').val() === "Test")){
        $('#alerteUserIdOK').collapse();
        $('#alerteUserIdBAD').show();
    }
    else{
        $('#alerteUserIdBAD').collapse();
        $('#alerteUserIdOK').show();
    }
});
// Validation mot de passe
$( "#passwordId" ).change(function() {
    console.log($('#passwordId').val());
//    if ($('#passwordId').val() ){
        $('#alertPassWeak').show();
        $('#alertPassMid').show();
        $('#alertPassStrong').show();
 /*   }
    else{
        $('#alerteUserIdBAD').hide();
        $('#alerteUserIdOK').show();
    }
    */
});


$("#boutonEnvoyer").click(function() {
    //Un champ Input
    alert($('#userEmail').val());

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

