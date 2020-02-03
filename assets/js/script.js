$(document).ready(function () {

    
/* ------ On load, hide all sections apart from 'home'------ */ 
$(function () {
    $("#navhome").addClass("active");
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


/* XXXXXXXXXXXXX MAPS/REVIEWS START XXXXXXXXXXXXX */

function initMap(aMap){
        var map = new google.maps.Map(document.getElementById(aMap), {
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
        var labels = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
        var markers = locations.map(function(location, i) {
            return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
        });
            var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
    } 


/* ------ Venue data starts ------ */
/* ------ EAT ------ */
const object1 = {"name": "64 Degrees", 
"about": "Tucked away in the Brighton Lanes, 64 Degrees is a small restaurant with an open kitchen by Great British Menu 2017 winner chef Michael Bremner,  where our passionate chefs concoct an evolving menu of tasty small plates using fresh, local produce.", 
"lat":50.821695, "lng":-0.140899, 
"website": "https://64degrees.co.uk/"}

const object2 = {"name": "Chilli Pickle", 
"about": "Inspired by Dawn & Alun’s Indian travels from the tropics of Tamil Nadu & Kerala, the wetlands of West Bengal, to the Rajasthani desert plains the country is an adventure and their cuisine embraces this it is vibrant, big flavoured and truly unapologetic.", 
"lat":50.824542, "lng":-0.138657, 
"website": "https://thechillipickle.com"}

const object3 = {"name": "Isaac At", 
"about": "Isaac At is a modern British restaurant in the centre of Brighton serving Sussex on a plate. Sourcing all of its ingredients from Sussex and the surrounding area. It was also the first restaurant in the world to be serving an exclusively all English wine list. ", 
"lat":50.826980, "lng":-0.136221, 
"website": "https://www.isaac-at.com/"}

const object4 = {"name": "Meatliquor", 
"about": "Back in 2008, an elusive van known as the MEATwagon began rocking up in South London on Friday nights. London Landlord Scott Collins went to try for himself, and it was love at first bite. The burgers were like nothing else. In September 2013 we opened our first place outside of London in Brighton.", 
"lat":50.828954, "lng":-0.135693, 
"website": "https://meatliquor.com/restaurant/meatliquor-brighton/"}

const object5 = {"name": "xxxx", "about": "xxxxxxxx", "lat":0, "lng":-0, "website": "https//:www.xxxxx"}
const object6 = {"name": "xxxx", "about": "xxxxxxxx", "lat":0, "lng":-0, "website": "https//:www.xxxxx"}
const object7 = {"name": "xxxx", "about": "xxxxxxxx", "lat":0, "lng":-0, "website": "https//:www.xxxxx"}
const object8 = {"name": "xxxx", "about": "xxxxxxxx", "lat":0, "lng":-0, "website": "https//:www.xxxxx"}
const object9 = {"name": "xxxx", "about": "xxxxxxxx", "lat":0, "lng":-0, "website": "https//:www.xxxxx"}
/* ------ DRINK ------ */
const object10 = {"name": "xxxx", "about": "xxxxxxxx", "lat":0, "lng":-0, "website": "https//:www.xxxxx"}
const object11 = {"name": "xxxx", "about": "xxxxxxxx", "lat":0, "lng":-0, "website": "https//:www.xxxxx"}
const object12 = {"name": "xxxx", "about": "xxxxxxxx", "lat":0, "lng":-0, "website": "https//:www.xxxxx"}
const object13 = {"name": "xxxx", "about": "xxxxxxxx", "lat":0, "lng":-0, "website": "https//:www.xxxxx"}
const object14 = {"name": "xxxx", "about": "xxxxxxxx", "lat":0, "lng":-0, "website": "https//:www.xxxxx"}
const object15 = {"name": "xxxx", "about": "xxxxxxxx", "lat":0, "lng":-0, "website": "https//:www.xxxxx"}
const object16 = {"name": "xxxx", "about": "xxxxxxxx", "lat":0, "lng":-0, "website": "https//:www.xxxxx"}
const object17 = {"name": "xxxx", "about": "xxxxxxxx", "lat":0, "lng":-0, "website": "https//:www.xxxxx"}
const object18 = {"name": "xxxx", "about": "xxxxxxxx", "lat":0, "lng":-0, "website": "https//:www.xxxxx"}
/* ------ STAY ------ */
const object10 = {"name": "xxxx", "about": "xxxxxxxx", "lat":0, "lng":-0, "website": "https//:www.xxxxx"}
const object11 = {"name": "xxxx", "about": "xxxxxxxx", "lat":0, "lng":-0, "website": "https//:www.xxxxx"}
const object12 = {"name": "xxxx", "about": "xxxxxxxx", "lat":0, "lng":-0, "website": "https//:www.xxxxx"}
const object13 = {"name": "xxxx", "about": "xxxxxxxx", "lat":0, "lng":-0, "website": "https//:www.xxxxx"}
const object14 = {"name": "xxxx", "about": "xxxxxxxx", "lat":0, "lng":-0, "website": "https//:www.xxxxx"}
const object15 = {"name": "xxxx", "about": "xxxxxxxx", "lat":0, "lng":-0, "website": "https//:www.xxxxx"}
const object16 = {"name": "xxxx", "about": "xxxxxxxx", "lat":0, "lng":-0, "website": "https//:www.xxxxx"}
const object17 = {"name": "xxxx", "about": "xxxxxxxx", "lat":0, "lng":-0, "website": "https//:www.xxxxx"}
const object18 = {"name": "xxxx", "about": "xxxxxxxx", "lat":0, "lng":-0, "website": "https//:www.xxxxx"}

/* ------ Venue data ends ------ */

// var object3 = {"name": "Stephen's Super restaurnat Pickle", "about": "best restaurant ever", "lat":50.821665, "lng":-0.144449, "website": "https//:www.google.com"}


function clicked_object(whatObject){
            $("#mapeat01").show();
            locations = [{ lat: whatObject["lat"], lng: whatObject["lng"] }] 
            initMap("googlemapeat01");

            $("#mapeat01").show();
            $("#eat").hide();

            document.getElementById("venuename").innerHTML = whatObject["name"];
            document.getElementById("bodytext").innerHTML = whatObject["about"];
            document.getElementById("weblink").href = whatObject["website"];
            document.getElementById("ta").href = whatObject["taLink"];
            document.getElementById("ta").src = whatObject["taLink"];


 /* ------ Click functions to show review pages start ------ */           
    /* ------ EAT ------ */
    }
     $("#eat01").click(function() {
        clicked_object(object1);
     });
     $("#eat02").click(function() {
        clicked_object(object2);
     });
     $("#eat03").click(function() {
        clicked_object(object3);
     }); 
     $("#eat04").click(function() {
        clicked_object(object4);
     }); 
     $("#eat05").click(function() {
        clicked_object(object5);
     }); 
     $("#eat06").click(function() {
        clicked_object(object6);
     }); 
     $("#eat07").click(function() {
        clicked_object(object8);
     }); 
     $("#eat08").click(function() {
        clicked_object(object8);
     }); 
     $("#eat09").click(function() {
        clicked_object(object9);
     }); 

     /* ------ DRINK ------ */
     $("#drink01").click(function() {
        clicked_object(object10);
     }); 
     $("#drink02").click(function() {
        clicked_object(object11);
     }); 
     $("#drink03").click(function() {
        clicked_object(object12);
     }); 
     $("#drink04").click(function() {
        clicked_object(object13);
     }); 
     $("#drink05").click(function() {
        clicked_object(object14);
     }); 
     $("#drink06").click(function() {
        clicked_object(object15);
     }); 
     $("#drink07").click(function() {
        clicked_object(object16);
     }); 
     $("#drink08").click(function() {
        clicked_object(object17);
     }); 
     $("#drink09").click(function() {
        clicked_object(object18);
     }); 

     /* ------ STAY ------ */
     $("#stay01").click(function() {
        clicked_object(object10);
     }); 
     $("#stay01").click(function() {
        clicked_object(object10);
     }); 
     $("#stay01").click(function() {
        clicked_object(object10);
     }); 
     $("#stay01").click(function() {
        clicked_object(object10);
     }); 
     $("#stay01").click(function() {
        clicked_object(object10);
     }); 
     $("#stay01").click(function() {
        clicked_object(object10);
     }); 
     $("#stay01").click(function() {
        clicked_object(object10);
     }); 
     $("#stay01").click(function() {
        clicked_object(object10);
     }); 
     $("#stay01").click(function() {
        clicked_object(object10);
     }); 

 /* ------ Click functions to show review pages end ------ */

/* XXXXXXXXXXXXX MAPS/REVIEWS START XXXXXXXXXXXXX */

// BACK-TO BUTTONS START

$(".backbuttoneat").click(function(){
    $("#eat").show();
    }); 

$(".backbuttondrink").click(function(){
    $("#drink").show();
    }); 
    
$(".backbuttonstay").click(function(){
    $("#stay").show();
    }); 

// BACK-TO BUTTONS END


$("#navbarbrand").click(function(){
    $("#home").show();
    $("#navhome").addClass("active");
    $("#naveat").removeClass("active");
    $("#navdrink").removeClass("active");
    $("#navstay").removeClass("active");
});

/* 

// SAMANTHA CODE XXXXXXXXX FRIDAY NIGHT

// FOR JAVASCRIPT

var object1 = [
    {   "ID": "mapeat01",    
       "name": "64 degrees",    
       "lat": 50.821695,    
       "lng": -0.140899 },
    {   "ID": "mapeat02",    
       "name": "Chilli Pickle",    
        "lat": 50.824542,    
       "lng": -0.138657 },
    ]
    
// FOR HTML

function getTheID(id){
    console.log(id)
}
    
// SAMANTHA CODE XXXXXXXXX  FRIDAY NIGHT 





    [
    {   "ID": "mapeat01",    
       "name": "64 degrees",    
       "lat": 50.821695,    
       "lng": -0.140899   },
       
    {   "ID": "mapeat02",    
       "name": "Chilli Pickle",    
        "lat": 50.824542,    
       "lng": -0.138657   },
    ]

function onclick(){
    document.getElementById("object").innerHTML = ["ID", "name", "lat", "lng"]
};

*/






/* HIDE OLD MAPS XXXXXXXXXXXXXXXXX
    // ------ Show mapeat01 ------ 
     $("#eat01").click(function() {
         $("#home, #eat, #drink, #stay").hide(); {
             locations = [{ lat: 50.821695, lng: -0.140899 }] // 64 Degrees
             initMap("googlemapeat01");
             $("#mapeat01").show();
         };
     });
     // ------ Show mapeat02 ------    
     $("#eat02").click(function() {
         $("#home, #eat, #drink, #stay").hide(); {
             locations = [{ lat: 50.824542, lng: -0.138657 }] // Chilli Pickle
             initMap("googlemapeat02");
             $("#mapeat02").show();
         };
     });
     // ------ Show mapeat03 ------ 
     $("#eat03").click(function() {
         $("#home, #eat, #drink, #stay").hide(); {
             locations = [{ lat: 50.826980, lng: -0.136221 }] // Issac At
             initMap("googlemapeat03")
             $("#mapeat03").show();
         };
     });
     // ------ Show mapeat04 ------ 
     $("#eat04").click(function() {
         $("#home, #eat, #drink, #stay").hide(); {
             locations = [{ lat: 50.828954, lng: -0.135693 }] // Meatliquor
             initMap("googlemapeat04")
             $("#mapeat04").show();
         };
     });
     // ------ Show mapeat05 ------ 
     $("#eat05").click(function() {
         $("#home, #eat, #drink, #stay").hide(); {
             locations = [{ lat: 50.822524, lng: -0.141957 }] // Browns
             initMap("googlemapeat05")
             $("#mapeat05").show();
         };
     });
     // ------ Show mapeat06 ------ 
     $("#eat06").click(function() {
        $("#home, #eat, #drink, #stay").hide(); {
             locations = [{ lat: 50.821452, lng: -0.148349 }] // The Salt Room
             initMap("googlemapeat06")
             $("#mapeat06").show();
         };
     });
     // ------ Show mapeat07 ------ 
     $("#eat07").click(function() {
         $("#home, #eat, #drink, #stay").hide(); {
             locations = [{ lat: 50.821328, lng: -0.140952 }] // Food For Friends
             initMap("googlemapeat07")
             $("#mapeat07").show();
         };
     });
     // ------ Show mapeat08 ------ 
     $("#eat08").click(function() {
         $("#home, #eat, #drink, #stay").hide(); {
             locations = [{ lat: 50.822072, lng: -0.143385 }] // Coal Shed
             initMap("googlemapeat08")
             $("#mapeat08").show();
         };
     });
     // ------ Show mapeat09 ------ 
     $("#eat09").click(function() {
         $("#home, #eat, #drink, #stay").hide(); {
             locations = [{ lat: 50.820831, lng: -0.136467 }] // VIP Pizza
             initMap("googlemapeat09")
             $("#mapeat09").show();
         };
     });

/* HIDE OLD MAPS XXXXXXXXXXX
    



<!--SAMANTHA CODE XXXXXXXXX FRIDAY NIGHT-->

/* function clicked_object(whatObject){
            // locations to be passed to the initMap function are pulled from the info in whatObject (aka object1) 
            locations = [{ lat: whatObject["lat"], lng: whatObject["lng"] }] 
             initMap("googlemapeat01");
             // display the previously hidden template /
             $("#testdisplay").show();
             $("#eat").hide();
            // get the html elemnts called venuename and bodytext, and put what we have under name and about in the object for them/
             document.getElementById("venuename").innerHTML = whatObject["name"];
             document.getElementById("bodytext").innerHTML = whatObject["about"];
    }
    // START HERE When an element with the ID of eat01 was clicked..  /
     $("#eat01").click(function() {
        // .. call the clicked_object function, and pass it the arguement of object1 (found on line 345 ) / 
        clicked_object("mapeat01");

     });

<!--SAMANTHA CODE XXXXXXXXX FRIDAY NIGHT-->


     // TRYING
    var object1 = [
    {   "ID": "mapeat01",    
       "name": "64 degrees",    
       "lat": 50.821695,    
       "lng": -0.140899   },
       
    {   "ID": "mapeat02",    
       "name": "Chilli Pickle",    
        "lat": 50.824542,    
       "lng": -0.138657   },
    ]

function onclick(){
    document.getElementById("object").innerHTML = ["ID", "name", "lat", "lng"]
};




// SAMANTHA CODE XXXXXXXXX FRIDAY NIGHT

Would say just focus on getting the ID, so can simplify it down to this (and this is definitely not complete code, just the flow of it)

//In the html
<div onclick= getTheID(mapeat01) >

// in the script.js
function getTheID(id){
    console.log(id)
}

// SAMANTHA CODE XXXXXXXXX FRIDAY NIGHT




// TRYING
    function myFunction() {
        document.getElementById("testeat").show = ["mapeat01"];
    }
*/