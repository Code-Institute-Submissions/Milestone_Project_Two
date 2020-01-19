$(document).ready(function() {

/* ******* NAV BAR START ******** */

/* Nav Bar logo */
    $("#navbarbrand").click(function(){
    $("#home").show();
    $("#eat").hide();
    $("#map").hide();
    $("#footer").show();
    });    

/* Nav Bar Home */
    $("#navhome").click(function(){
    $("#home").show();
    $("#eat").hide();
    $("#map").hide();
    $("#footer").show();
    }); 

/* Nav Bar Eat */
    $("#naveat").click(function(){
    $("#eat").show();
    $("#home").hide();
    $("#map").hide();
    $("#footer").hide();
    }); 

/* ******* NAV BAR END ******** */




/* ******* EAT START ******** */

 /* Show Eat Page */
    $("#buttoneat").click(function(){
    $("#eat").show();
    $("#home").hide();
    $("#map").hide();
    $("#footer").hide();
    });

/* Show map01 */
    $("#eat01").click(function(){
    $("#map").show();
    $("#home").hide();
    $("#eat").hide();
    $("#footer").hide();
    });

/* ******* EAT END ******** */


}); 
