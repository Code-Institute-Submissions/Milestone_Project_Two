$(document).ready(function() {

    
/* ------ On load, hide all sections apart from 'home'  ------ */ 
$(function() {
    $("#eat, #drink, #stay, #testdisplay, #mapeat01, #mapeat02, #mapeat03, #mapeat04, #mapeat05, #mapeat06, #mapeat07, #mapeat08, #mapeat09").hide();
    $("#mapdrink01, #mapdrink02, #mapdrink03, #mapdrink04, #mapdrink05, #mapdrink06, #mapdrink07, #mapdrink08, #mapdrink09").hide();
    $("#mapstay01, #mapstay02, #mapstay03, #mapstay04, #mapstay05, #mapstay06, #mapstay07, #mapstay08, #mapstay09").hide();
    
/* XXXXXXXXXXXXX NAV BAR START XXXXXXXXXXXXX  */

    /* ------ Hide sections ------ */
	$("#navhome, #naveat, #navdrink, #navstay").click(function() {
		$("#home, #eat, #drink, #stay").hide();
	    $("#mapeat01, #mapeat02, #mapeat03, #mapeat04, #mapeat05, #mapeat06, #mapeat07, #mapeat08, #mapeat09").hide();
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
function initMap(aMap){
        const map = new google.maps.Map(document.getElementById(aMap), {
            zoom: 14,
            styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]

            ,
            center: {
                lat: 50.827362,
                lng: -0.140730  
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

    // /* ------ Show mapeat01 ------ */
    // $("#eat01").click(function() {
    //     $("#home, #eat, #drink, #stay").hide();
    //     if ($(this).attr("id") === "eat01") {
    //         locations = [{ lat: 50.821695, lng: -0.140899 }] // 64 Degrees
    //         initMap("googlemapeat01");
    //         $("#mapeat01").show();
    //     };
    // });
    // /* ------ Show mapeat02 ------ */   
    // $("#eat02").click(function() {
    //     $("#home, #eat, #drink, #stay").hide();
    //     if ($(this).attr("id") === "eat02") {
    //         locations = [{ lat: 50.824542, lng: -0.138657 }] // Chilli Pickle
    //         initMap("googlemapeat02");
    //         $("#mapeat02").show();
    //     };
    // });
    // /* ------ Show mapeat03 ------ */
    // $("#eat03").click(function() {
    //     $("#home, #eat, #drink, #stay").hide();
    //     if ($(this).attr("id") === "eat03") {
    //         locations = [{ lat: 50.826980, lng: -0.136221 }] // Issac At
    //         initMap()
    //         $("#mapeat03").show();
    //     };
    // });
    // /* ------ Show mapeat04 ------ */
    // $("#eat04").click(function() {
    //     $("#home, #eat, #drink, #stay").hide();
    //     if ($(this).attr("id") === "eat04") {
    //         locations = [{ lat: 50.828954, lng: -0.135693 }] // Meatliquor
    //         initMap()
    //         $("#mapeat04").show();
    //     };
    // });
    // /* ------ Show mapeat05 ------ */
    // $("#eat05").click(function() {
    //     $("#home, #eat, #drink, #stay").hide();
    //     if ($(this).attr("id") === "eat05") {
    //         locations = [{ lat: 50.822524, lng: -0.141957 }] // Browns
    //         initMap()
    //         $("#mapeat05").show();
    //     };
    // });
    // /* ------ Show mapeat06 ------ */
    // $("#eat06").click(function() {
    //     $("#home, #eat, #drink, #stay").hide();
    //     if ($(this).attr("id") === "eat06") {
    //         locations = [{ lat: 50.821452, lng: -0.148349 }] // The Salt Room
    //         initMap()
    //         $("#mapeat06").show();
    //     };
    // });
    // /* ------ Show mapeat07 ------ */
    // $("#eat07").click(function() {
    //     $("#home, #eat, #drink, #stay").hide();
    //     if ($(this).attr("id") === "eat07") {
    //         locations = [{ lat: 50.821328, lng: -0.140952 }] // Food For Friends
    //         initMap()
    //         $("#mapeat07").show();
    //     };
    // });
    // /* ------ Show mapeat08 ------ */
    // $("#eat08").click(function() {
    //     $("#home, #eat, #drink, #stay").hide();
    //     if ($(this).attr("id") === "eat08") {
    //         locations = [{ lat: 50.822072, lng: -0.143385 }] // Coal Shed
    //         initMap()
    //         $("#mapeat08").show();
    //     };
    // });
    // /* ------ Show mapeat09 ------ */
    // $("#eat09").click(function() {
    //     $("#home, #eat, #drink, #stay").hide();
    //     if ($(this).attr("id") === "eat09") {
    //         locations = [{ lat: 50.820831, lng: -0.136467 }] // VIP Pizza
    //         initMap()
    //         $("#mapeat09").show();
    //     };
    // });


    
/* XXXXXXXXXXXXX MAPS END XXXXXXXXXXXXX */


/* END. NEED THIS AT END */


/* this whole object gets put into the parameter whatObject - clicked_object(argument) --> clicked_object(parameter) and is 'unpacked' on line 664 */
var object1 = {"name":"64 Degrees", "about": "NEW TEXT FOR 64 DEGREES!!!!!", "lat":50.821695, "lng":-0.140899}
var object2 = {"name":"Chilli Pickle", "about": "NEW TEXT FOR CHILLI!!!!!", "lat":50.821665, "lng":-0.144449}

function clicked_object(whatObject){
            /* locations to be passed to the initMap function are pulled from the info in whatObject (aka object1) */
            locations = [{ lat: whatObject["lat"], lng: whatObject["lng"] }] // 64 Degrees
             initMap("googlemapeat01");
             /* display the previously hidden template */
             $("#testdisplay").show();
             $("#eat").hide();
            /* get the html elemnts called venuename and bodytext, and put what we have under name and about in the object for them*/
             document.getElementById("venuename").innerHTML = whatObject["name"];
             document.getElementById("bodytext").innerHTML = whatObject["about"];
    }
    /* START HERE When an element with the ID of eat01 was clicked.. (go to line 360 ) */
     $("#eat01").click(function() {
        /* .. call the clicked_object function, and pass it the arguement of object1 (found on line 345 ) */ 
        clicked_object(object1);

     });
     $("#eat02").click(function() {
        /* .. call the clicked_object function, and pass it the arguement of object1 (found on line 345 ) */ 
        clicked_object(object2);

     });