// Validation usager
$( "#userId" ).change(function() {

    if (($('#userId').val() === "SLAY") || ($('#userId').val() === "Test")){
        $('#alerteUserIdOK').hide();
        $('#alerteUserIdBAD').show();
    }
    else{
        $('#alerteUserIdBAD').hide();
        $('#alerteUserIdOK').show();
    }
});

// Validation mot de passe
$( "#passwordId" ).change(function() {

var password = $('#passwordId').val();
var i=0, char='';
var nbNum=0,nbUpCase=0;

console.log($('#passwordId').val()+' '+password.length);
//console.log($('#passwordId').val().match(/));
    if ($('#passwordId').val().length < 6 ){
        $('#alertPassMid').hide();
        $('#alertPassStrong').hide();
        $('#alertPassWeak').show();
    }
    else if ($('#passwordId').val().length >= 6 ){

 /*

Shany Carle - 04-12-2018 21:16: https://stackoverflow.com/questions/1027224/how-can-i-test-if-a-letter-in-a-string-is-uppercase-or-lowercase-using-javascrip
Shany Carle - 04-12-2018 21:16: Oui un REGEX mais il y a plus simple
Shany Carle - 04-12-2018 21:17: Tu boucles lettre par lettre et tu peux faire : if (character === character.toUpperCase())
Jean Fortin - 04-12-2018 21:19: C'est le lien que tu as envoyé?
Shany Carle - 04-12-2018 21:24: Oui ça explique comment faire
Shany Carle - 04-12-2018 21:25: Mettons que tu as une string :
Shany Carle - 04-12-2018 21:25: var mot = "shany";
Shany Carle - 04-12-2018 21:25: mot[0] === 's'
Shany Carle - 04-12-2018 21:26: Tu peux aussi faire if(mot[0] === mot[0].toUpperCase() --> Retourne vrai si la première lettre est une majuscule.
Jean Fortin - 04-12-2018 21:32: oui mais ca fait la premieère lettre seulement
Shany Carle - 04-12-2018 21:34: Tu dois boucler
Shany Carle - 04-12-2018 21:34: for(var i=0;i<mot.length;i++)
Shany Carle - 04-12-2018 21:35: if (mot[i] === mot[i].toUpperCase()
 */
        // Test password pour chiffres et lettres
        while (i < password.length){
            char = password.charAt(i);
            if (!isNaN(char * 1)){
                nbNum++;
            }
            else{
                if (char == char.toUpperCase()) {
                    nbUpCase++;
                }
            }
            i++;
        }
        console.log('i: '+i+' Chiffres: '+nbNum+', Majuscules: '+nbUpCase);

        if (nbNum > 0 && nbUpCase > 0 ){
            $('#alertPassWeak').hide();
            $('#alertPassMid').hide();
            $('#alertPassStrong').show();
        }
        else {
            $('#alertPassWeak').hide();
            $('#alertPassStrong').hide();
            $('#alertPassMid').show();
        }
    }
});

// Validation match mot de passe
$( "#passwordConfirm" ).change(function() {

//console.log($('#passwordId').val().match(/));
    if ($('#passwordId').val() === $('#passwordConfirm').val()){
        $('#alertPwNoMatch').hide();
        $('#alertPwMatch').show();
    }
    else{
        $('#alertPwMatch').hide();
        $('#alertPwNoMatch').show();
    } 

});
// Envoi des données
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

