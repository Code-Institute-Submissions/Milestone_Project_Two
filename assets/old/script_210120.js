
$(document).ready(function() {
    
/* ------ On load, hide all sections apart from 'home'  ------ */ 
$(function() {
    $("#eat, #drink, #stay, #mapeat01, #mapeat02, #mapeat03, #mapeat04, #mapeat05, #mapeat06, #mapeat07, #mapeat08, #mapeat09").hide();
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
        "color": "#6cc3cc"
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


// XXXXX STEPHEN'S CODE XXXXX

/* this whole object gets put into the parameter whatObject - clicked_object(argument) --> clicked_object(parameter) and is 'unpacked' on line 664 */
var object1 = {"name":"64 Degrees", "about": "NEW TEXT FOR 64 DEGREES!!!!!", "lat":50.821695, "lng":-0.140899}

function clicked_object(whatObject){
            /* locations to be passed to the initMap function are pulled from the info in whatObject (aka object1) */
            locations = [{ lat: whatObject["lat"], lng: whatObject["lng"] }] // 64 Degrees
             initMap("googlemapeat01");
             $("#mapeat01").show();
             document.getElementById("header").innerHTML = whatObject["name"];
    }
    /* START HERE When an element with the ID of eat01 was clicked.. (go to line 672) */
     $("#eat01").click(function() {
        /* .. call the clicked_object function, and pass it the arguement of object1 (found on line 659) */ 
        clicked_object(object1);

     });





     

/* XXXXXX stephen's coding  XXXXXX
    
 var object1 = {"name":"64 Degrees", "about": "something about", "lat":50.821695, "lng":-0.140899}
function clicked_object(whatObject){
            
             locations = [{ lat: whatObject["lat"], lng: whatObject["lng"] }] // 64 Degrees
            initMap("googlemapeat01");
            $("#mapeat01").show();
             document.getElementById("header").innerHTML = whatObject["name"];
     }
    $("#eat01").click(function() {
        clicked_object(object1);
     });


/* XXXXXXXXXXXXX MAPS END XXXXXXXXXXXXX /

/XXXXXXXXXXX muted old maps XXXXXXXXXXXX

// ------ Show mapeat01 ------ /
    $("#eat01").click(function() {
        $("#home, #eat, #drink, #stay").hide();
        if ($(this).attr("id") === "eat01") {
            locations = [{ lat: 50.821695, lng: -0.140899 }] // 64 Degrees
            initMap("googlemapeat01");
            $("#mapeat01").show();
        };
    
    // ------ Show mapeat02 ------ /   
    $("#eat02").click(function() {
        $("#home, #eat, #drink, #stay").hide();
        if ($(this).attr("id") === "eat02") {
            locations = [{ lat: 50.824542, lng: -0.138657 }] // Chilli Pickle
            initMap("googlemapeat02");
            $("#mapeat02").show();
        };
    });

    // ------ Show mapeat03 ------ 
    $("#eat03").click(function() {
        $("#home, #eat, #drink, #stay").hide();
        if ($(this).attr("id") === "eat03") {
        @@ -280,7 +322,7 @@ function initMap(aMap){
        $("#mapeat03").show();
        };
    });

    // ------ Show mapeat04 ------ 
    $("#eat04").click(function() {
        $("#home, #eat, #drink, #stay").hide();
        if ($(this).attr("id") === "eat04") {
        @@ -289,7 +331,7 @@ function initMap(aMap){
        $("#mapeat04").show();
        };
    });

    // ------ Show mapeat05 ------ /
    $("#eat05").click(function() {
        $("#home, #eat, #drink, #stay").hide();
        if ($(this).attr("id") === "eat05") {
        @@ -298,7 +340,7 @@ function initMap(aMap){
        $("#mapeat05").show();
        };
    });

    // ------ Show mapeat06 ------ 
    $("#eat06").click(function() {
        $("#home, #eat, #drink, #stay").hide();
        if ($(this).attr("id") === "eat06") {
        @@ -307,7 +349,7 @@ function initMap(aMap){
        $("#mapeat06").show();
        };
    });

    // ------ Show mapeat07 ------ 
    $("#eat07").click(function() {
        $("#home, #eat, #drink, #stay").hide();
        if ($(this).attr("id") === "eat07") {
        @@ -316,7 +358,7 @@ function initMap(aMap){
        $("#mapeat07").show();
        };
    });

    //------ Show mapeat08 ------
    $("#eat08").click(function() {
        $("#home, #eat, #drink, #stay").hide();
        if ($(this).attr("id") === "eat08") {
        @@ -325,7 +367,7 @@ function initMap(aMap){
        $("#mapeat08").show();
        };
    });

    //------ Show mapeat09 ------
    $("#eat09").click(function() {
        $("#home, #eat, #drink, #stay").hide();
        if ($(this).attr("id") === "eat09") {
        @@ -335,27 +377,4 @@ function initMap(aMap){
        };
    });


// XXXXXXXXXXXXX MAPS END XXXXXXXXXXXXX


/* XXXXXXXX STEPHEN XXXXXXX 

// var object1 = {"name":"64 Degrees", "about": "something about", "lat":50.821695, "lng":-0.140899}

//  function clicked_object(whatObject){

//             locations = [{ lat: whatObject["lat"], lng: whatObject["lng"] }] // 64 Degrees
//             initMap("googlemapeat01");
//             $("#mapeat01").show();
//             document.getElementById("header").innerHTML = whatObject["name"];

//     }


//     $("#eat01").click(function() {
//         clicked_object(object1);

//     });






/* XXXXXXXXX Michael's code start XXXXXXXXXXXX

function clicked_object(whatObject, elementToShow){       
            locations = [{ lat: whatObject["lat"], lng: whatObject["lng"] }] 
             initMap("googlemapeat01");
             $(elementToShow ).show();
             document.getElementById("header").innerHTML = whatObject["name"];
    }

$("#eat01").click(function() {
         clicked_object(object1, "#mapeat01");
     });

$("#eat02").click(function() {
         clicked_object(object2, "#mapeat02");
     });

// Michael's code end XXXXXXXXXX */


// var object1 = {"name":"Pickled Ginger", "about": "something about", "lat":50, "lng":70}

//  function clicked_object(whatObject){
            
//             locations = [{ lat: whatObject["lat"], lng: whatObject["long"] }] // Chilli Pickle
//             initMap("googlemapeat02");
//             $("#mapeat02").show();
//             document.getElementById("header").innerHTML = whatObject["name"];

//     }


//     $("#eat01").click(function() {
//         clicked_object(object1);

//     });