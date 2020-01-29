$(document).ready(function() {
/* XXXXXXXXXXXXX NAV BAR START XXXXXXXXXXXXX  */
/* ------ On load, hide all sections apart from 'home'  ------ */ 
$(function() {
    $("#eat, #drink, #stay, #mapeat01, #mapeat02, #mapeat03, #mapeat04, #mapeat05, #mapeat06, #mapeat07, #mapeat08, #mapeat09").hide();
    $("#mapdrink01, #mapdrink02, #mapdrink03, #mapdrink04, #mapdrink05, #mapdrink06, #mapdrink07, #mapdrink08, #mapdrink09").hide();
    $("#mapstay01, #mapstay02, #mapstay03, #mapstay04, #mapstay05, #mapstay06, #mapstay07, #mapstay08, #mapstay09").hide();
    

    /* ------ Hide sections ------ */
	$("#navhome, #naveat, #navdrink, #navstay").click(function() {
		$("#home, #eat, #drink, #stay, #mapeat01").hide();
	    $("#eat, #drink, #stay, #mapeat01, #mapeat02, #mapeat03, #mapeat04, #mapeat05, #mapeat06, #mapeat07, #mapeat08, #mapeat09").hide();
        $("#mapdrink01, #mapdrink02, #mapdrink03, #mapdrink04, #mapdrink05, #mapdrink06, #mapdrink07, #mapdrink08, #mapdrink09").hide();
        $("#mapstay01, #mapstay02, #mapstay03, #mapstay04, #mapstay05, #mapstay06, #mapstay07, #mapstay08, #mapstay09").hide();

    /* ------ Remove active class ------ */
	$("#navhome, #naveat, #navdrink, #stay").removeClass("active");
	$("#navhome, #naveat, #navdrink, #navstay").removeClass("active");

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
        const markers = locations.map(function(location, i) {
            return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
        });
            const markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
    } 
    /* ------ Show mapeat01 ------ */
    $("#eat01").click(function() {
        $("#home, #eat, #drink, #stay").hide();
        if ($(this).attr("id") === "eat01") {
            locations = [{ lat: 50.822010, lng: -0.140770 }] // 64 Degrees
            initMap()
            $("#mapeat01").show();
        };
    /* ------ Show mapeat02 ------ */   
    $("#eat02").click(function() {
        $("#home, #eat, #drink, #stay").hide();
        if ($(this).attr("id") === "eat02") {
            locations = [{ lat: 50.825371, lng: -0.138480 }] // Chilli Pickle
            initMap()
            $("#mapeat02").show();
        };
    });
    /* ------ Show mapeat03 ------ */
    $("#eat03").click(function() {
        $("#home, #eat, #drink, #stay").hide();
        if ($(this).attr("id") === "eat03") {
            locations = [{ lat: 50.827030, lng: -0.136340 }] // Issac At
            initMap()
            $("#mapeat03").show();
        };
    });
    /* ------ Show mapeat04 ------ */
    $("#eat04").click(function() {
        $("#home, #eat, #drink, #stay").hide();
        if ($(this).attr("id") === "eat04") {
            locations = [{ lat: 50.828442, lng: -0.135370 }] // Meatliquor
            initMap()
            $("#mapeat04").show();
        };
    });
    /* ------ Show mapeat05 ------ */
    $("#eat05").click(function() {
        $("#home, #eat, #drink, #stay").hide();
        if ($(this).attr("id") === "eat05") {
            locations = [{ lat: 50.822840, lng: -0.143130 }] // Browns
            initMap()
            $("#mapeat05").show();
        };
    });
    /* ------ Show mapeat06 ------ */
    $("#eat06").click(function() {
        $("#home, #eat, #drink, #stay").hide();
        if ($(this).attr("id") === "eat06") {
            locations = [{ lat: 50.821079, lng: -0.146990 }] // The Salt Room
            initMap()
            $("#mapeat06").show();
        };
    });
    /* ------ Show mapeat07 ------ */
    $("#eat07").click(function() {
        $("#home, #eat, #drink, #stay").hide();
        if ($(this).attr("id") === "eat07") {
            locations = [{ lat: 50.821388, lng: -0.141080 }] // Food For Friends
            initMap()
            $("#mapeat07").show();
        };
    });
    /* ------ Show mapeat08 ------ */
    $("#eat08").click(function() {
        $("#home, #eat, #drink, #stay").hide();
        if ($(this).attr("id") === "eat08") {
            locations = [{ lat: 50.822121, lng: -0.143370 }] // Coal Shed
            initMap()
            $("#mapeat08").show();
        };
    });
    /* ------ Show mapeat09 ------ */
    $("#eat09").click(function() {
        $("#home, #eat, #drink, #stay").hide();
        if ($(this).attr("id") === "eat09") {
            locations = [{ lat: 50.820845, lng: -0.136460 }] // VIP Pizza
            initMap()
            $("#mapeat09").show();
        };
    });
    });
;
    
/* XXXXXXXXXXXXX MAPS END XXXXXXXXXXXXX */
/* END. NEED THIS AT END */
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