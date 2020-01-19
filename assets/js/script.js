$(document).ready(function() {

 /* Show Eat Page */
    $("#buttoneat").click(function(){
    $("#eat").show();
    $("#home").hide();
    $("#map").hide();
    });

/* Show map01 */
    $("#eat01").click(function(){
    $("#map").show();
    $("#home").hide();
    $("#eat").hide();
    });

/* Nav Bar Eat */
    $("#naveat").click(function(){
    $("#eat").show();
    $("#home").hide();
    $("#map").hide();
    }); 

}); 
