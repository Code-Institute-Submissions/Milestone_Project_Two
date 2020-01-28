$(document).ready(function() {

/* XXXXXXXXXXXXX NAV BAR START XXXXXXXXXXXXX  */

/* ------ On load, hide all sections apart from 'home'  ------ */ 
$(function() {
    $("#eat, #drink, #stay, #mapeat01, #mapeat02, #mapeat03, #mapeat04, #mapeat05, #mapeat06, #mapeat07, #mapeat08, #mapeat09").hide();
    $("#mapdrink01, #mapdrink02, #mapdrink03, #mapdrink04, #madrink05, #mapdrink06, #mapdrink07, #mapdrink08, #mapdrink09").hide();

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


/* XXXXXXXXXXXXX MAPS START XXXXXXXXXXXXX */


function initMap(){
        const map = new google.maps.Map(document.getElementById("googlemapeat01"), {
            zoom: 16,
            center: {
                lat: 50.821910,
                lng: -0.140770  
            }
        });

        const labels = "ABCDEFGHIJKLMNOPQRSTUVXYZ";

        /*
        const locations = [
            { lat: 50.822010, lng: -0.140770 }, // 64 Degrees
            { lat: 50.825371, lng: -0.138480 }, // Chilli Pickle
            { lat: 50.827030, lng: -0.136340 }, // Issac At
            { lat: 50.828442, lng: -0.135370 }, // Meatliquor
            { lat: 50.822840, lng: -0.143130 }, // Browns 
            { lat: 50.821079, lng: -0.146990 }, // Salt Room 
            { lat: 50.821388, lng: -0.141080 }, // Food For Friends 
            { lat: 50.822121, lng: -0.143370 }, // Coal Shed 
            { lat: 50.820845, lng: -0.136460 } // VIP Pizza 
        ];
*/
        const markers = locations.map(function(location, i) {
            return new google.maps.Marker({
                position: location,
                label: labels[i % labels.lenght]
            });
        });

            const markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

    } 

    $("#eat01").click(function() {
        $("#home, #eat, #drink, #stay").hide();

        if ($(this).attr("id") === "eat01") {
            locations = [{ lat: 50.822010, lng: -0.140770 }]
            initMap()
            $("#mapeat01").show();
        };
    });
    

/* XXXXXXXXXXXXX MAPS END XXXXXXXXXXXXX */



/* END. NEED THIS AT END */

