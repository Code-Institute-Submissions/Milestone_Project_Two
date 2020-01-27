$(document).ready(function() {

/* XXXXXXXXXXXXX NAV BAR START XXXXXXXXXXXXX  */

/* ------ On load, hide all sections apart from 'home'  ------ */ 
$(function() {
    $("#eat, #drink, #stay, #mapeat01, #mapeat02, #mapeat03, #mapeat04, #mapeat05, #mapeat06, #mapeat07, #mapeat08, #mapeat09").hide();

    /* ------ Hide sections ------ */
	$("#navhome, #naveat, #navdrink, #navstay").click(function() {
		$("#home, #eat, #drink, #stay, #mapeat01").hide();

    /* ------ Remove active class ------ */
	$("#navhome, #naveat, #navdrink, #stay").removeClass("active");

    /* ------ If/else statements to check which li was clicked ------ */
    /* ------ apply 'active' class only to that li, and show the corresponding section ------ */
	if ($(this).attr("id") === "navhome") {
		$("#navhome").addClass("active");
        $("#home").show();

    } else if ($(this).attr("id") === "navbarbrand") {
		$("#navhome").addClass("active");
        $("#home").show();

	} else if ($(this).attr("id") === "naveat") {
		$("#naveat").addClass("active");
        $("#eat").show();

	} else if ($(this).attr("id") === "navdrink") {
		$("#navdrink").addClass("active");
        $("#drink").show();
                
	} else if ($(this).attr("id") === "navstay") {
		$("#navstay").addClass("active");
        $("#stay").show();
        }
    });
});

/* XXXXXXXXXXXXX NAV BAR END XXXXXXXXXXXXX  */



/* XXXXXXXXXXXXX HOME PAGE EAT/DRINK/STAY START XXXXXXXXXXXXX */


    /* ------ Hide sections ------ */
    $("#buttoneat, #buttondrink, #buttonstay").click(function() {
        $("#home, #eat, #drink, #stay").hide();

    /* ------ If/else statements to check which button was clicked ------ */
    /* ------ apply 'active' class only to that li, and show the corresponding section ------ */        
        if ($(this).attr("id") === "buttoneat") {
            $("#naveat").addClass("active");
            $("#eat").show();

        } else if ($(this).attr("id") === "buttondrink") {
            $("#navrink").addClass("active");
            $("#drink").show();
                
        } else if ($(this).attr("id") === "buttonstay") {
            $("#navstay").addClass("active");
            $("#stay").show();
        };
    });
});

/* XXXXXXXXXXXXX HOME PAGE EAT/DRINK/STAY BOX BUTTONS END XXXXXXXXXXXXX */


    $("#eat01").click(function() {
        $("#home, #eat, #drink, #stay").hide();

        if ($(this).attr("id") === "eat01") {
            locations = [{ lat: 50.822010, lng: -0.140770 }]
            initMap()
            $("#mapeat01").show();
        };
    });
    





/* END. NEED THIS AT END */

