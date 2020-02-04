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

        $("#navbarbrand").click(function(){
            $("#home").show();
            $("#navhome").addClass("active");
            $("#naveat").removeClass("active");
            $("#navdrink").removeClass("active");
            $("#navstay").removeClass("active");
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
                $("#navhome").removeClass("active");
                $("#eat").show();

            } else if ($(this).attr("id") === "buttondrink") {
                $("#navdrink").addClass("active");
                $("#navhome").removeClass("active");
                $("#drink").show();
                
            } else if ($(this).attr("id") === "buttonstay") {
                $("#navstay").addClass("active");
                $("#navhome").removeClass("active");
                $("#stay").show();
        };
    });
});

/* XXXXXXXXXXXXX HOME PAGE EAT/DRINK/STAY BOX BUTTONS END XXXXXXXXXXXXX */


/* XXXXXXXXXXXXX MAPS/REVIEWS START XXXXXXXXXXXXX */

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
            center: { // Brighton
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


/* ------ Venue reviews start ------ */

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

const object5 = {"name": "Browns", "about": "Just a short stroll from the Royal Pavilion, the twisting alleyways of The Lanes and the resort’s iconic pier, Browns Brighton first opened its doors in the early 1970s, marking the beginning of our on-going commitment to sourcing quality produce from British suppliers and providing first-class service to our customers.", 
"lat":50.822524, "lng":-0.141957, 
"website": "https://www.browns-restaurants.co.uk/restaurants/southeast/brighton"}

const object6 = {"name": "The Salt Room", 
"about": "Boasting uninterrupted views of the Brighton seafront and iconic West Pier ruins, The Salt Room is a modern British seafood restaurant that celebrates cooking over coal. Winner of the Seafood Restaurant of the Year 2017, our seaside restaurant is the best restaurant in Brighton to enjoy sustainable, local produce. ", 
"lat":50.821452, "lng":-0.148349, 
"website": "https://www.saltroom-restaurant.co.uk/"}

const object7 = {"name": "Food For Friends", 
"about": "Food for Friends is Brighton’s original award-winning vegetarian and vegan restaurant, featured in ‘The Sunday Times’ Top Vegetarian and Vegan Restaurants and in 'The Good Food Guide 2018'. Our ethos is tasty and honest cooking using fresh & consciously sourced produce. Our relaxed and attentive atmosphere will ensure you’ll be welcomed as a guest, but will leave as a friend.", 
"lat":50.821328, "lng":-0.140952, 
"website": "https://www.foodforfriends.com"}

const object8 = {"name": "The Coal Shed", 
"about": "The Coal Shed is a steak restaurant in the heart of Brighton. The menu is simple: the highest quality ingredients, sourced as locally as possible, and expertly cooked over coal. As well as a seasonal à la carte menu, we also offer daily specials, a great value express lunch and pre theatre menu, and Brighton's favourite Sunday Sharing Roast.", 
"lat":50.822072, "lng":-0.143385, 
"website": "https://www.coalshed-restaurant.co.uk/brighton"}

const object9 = {"name": "VIP Pizza", 
"about": "An Authentic pizzeria and restaurant in offering real neapolitan pizza in the Brighton, Saltdean and Sussex area made with home made sourdough and cooked in 100% traditional wood burning pizza oven. All our ingredients are chosen based on their high quality and come from our farm in Naples regulated for its high quality.", 
"lat":50.820831, "lng":-0.136467, 
"website": "http://pizzavip.co.uk/"}

/* ------ DRINK ------ */

const object10 = {"name": "Bison Beer", 
"about": "Welcome to Bison Beer. We're a bar, bottleshop and brewery brand based in Brighton and Hove, actually. We stock a huge range of craft beer from around the world with a keen interest in the Sussex beer scene. We are local, independent and proud to be a part of what we think is the best city in the country.", 
"lat":50.825452, "lng":-0.137017, 
"website": "https://www.bisonbeer.co.uk/"}

const object11 = {"name": "The Joker", 
"about": "We have lovingly refurbished our first floor, creating an elegant cocktail lounge and games room complete with pool table, dartboard and smart TV. London Road looks ace from up here. Children are welcome until 8pm everyday.", 
"lat":50.833887, "lng":-0.139027, 
"website": "http://www.thejokerbrighton.com/"}

const object12 = {"name": "The Mesmerist", 
"about": "A dapper looking lounge bar in the heart of Brighton’s Lanes that spans three floors and offers a choice of individually styled rooms and spaces to enjoy a quality food offering or an expertly mixed cocktail or two.", 
"lat":50.820973, "lng":-0.140574, 
"website": "https://www.mesmerist.pub/"}

const object13 = {"name": "Mrs Fitzherberts", 
"about": "Set in an environment that is Fitz for a king, the newly refurbished Fitzherberts boasts two great heated and lit outdoor terraces. Our street terrace on Brighton’s premier pedestrianised thoroughfare, New Road, is the BEST place to watch Brighton play.", 
"lat":50.823952, "lng":-0.139062, 
"website": "https://www.mrsfitzherberts.co.uk/"}

const object14 = {"name": "Ohso Social", 
"about": "An oasis on Brighton’s world famous beach, OhSo Social is a truly unique venue, that transforms itself from a family friendly cafe-bar by day, into a buzzing hotspot for all to socialise by night.  We’re proud to serve delicious food, cakes, coffees and artisan beers and wines, as well as cocktails, and a vast array of spirits.", 
"lat":50.819132, "lng":-0.139313, 
"website": "https://www.ohsobrighton.co.uk/"}

const object15 = {"name": "Speakeasy at the Wick", 
"about": "Taking inspiration from America's prohibition era, The Wick have revamped their top floor and created The Speakeasy, second home to a classy, decadent crowd enjoying their haunts a little more interesting than Hoves usual stomping grounds.", 
"lat":50.826080, "lng":-0.161790, 
"website": "http://www.speakeasybrighton.co.uk/"}

const object16 = {"name": "Unbarred Brewery", 
"about": "No-rules brewing from the heart of brighton. Flavour without compromise, challenging convention with passion & care. Drink beer, have fun, enjoy in good company.", 
"lat":50.833267, "lng":-0.139363, 
"website": "https://www.unbarredbrewery.com/"}

const object17 = {"name": "xxxx", 
"about": "xxxxxxxx", 
"lat":0, "lng":-0, 
"website": "https//:www.xxxxx"}

const object18 = {"name": "xxxx", 
"about": "xxxxxxxx", 
"lat":0, "lng":-0, 
"website": "https//:www.xxxxx"}

/* ------ STAY ------ */

const object19 = {"name": "xxxx", 
"about": "xxxxxxxx", 
"lat":0, "lng":-0, 
"website": "https//:www.xxxxx"}

const object20 = {"name": "xxxx", 
"about": "xxxxxxxx", 
"lat":0, "lng":-0, 
"website": "https//:www.xxxxx"}

const object21 = {"name": "xxxx", 
"about": "xxxxxxxx", 
"lat":0, "lng":-0, 
"website": "https//:www.xxxxx"}

const object22 = {"name": 
"xxxx", "about": "xxxxxxxx", 
"lat":0, "lng":-0, 
"website": "https//:www.xxxxx"}

const object23 = {"name": "xxxx", 
"about": "xxxxxxxx", 
"lat":0, "lng":-0, 
"website": "https//:www.xxxxx"}

const object24 = {"name": "xxxx", 
"about": "xxxxxxxx", 
"lat":0, "lng":-0, 
"website": "https//:www.xxxxx"}

const object25 = {"name": "xxxx", 
"about": "xxxxxxxx", 
"lat":0, "lng":-0, 
"website": "https//:www.xxxxx"}

const object26 = {"name": "xxxx", 
"about": "xxxxxxxx", 
"lat":0, "lng":-0, 
"website": "https//:www.xxxxx"}

const object27 = {"name": "xxxx", 
"about": "xxxxxxxx", 
"lat":0, "lng":-0, 
"website": "https//:www.xxxxx"}

/* ------ Venue reviews end ------ */

// var object3 = {"name": "Stephen's Super restaurnat Pickle", "about": "best restaurant ever", "lat":50.821665, "lng":-0.144449, "website": "https//:www.google.com"}


function clicked_object(whatObject){
            $("#mapeat01").show();
            locations = [{ lat: whatObject["lat"], lng: whatObject["lng"] }] 
            initMap("googlemapeat01");

            $("#mapeat01").show();
            $("#eat").hide();
            $("#drink").hide();
            $("#stay").hide();

            document.getElementById("venuename").innerHTML = whatObject["name"];
            document.getElementById("bodytext").innerHTML = whatObject["about"];
            document.getElementById("weblink").href = whatObject["website"];
          //  document.getElementById("ta").href = whatObject["taLink"];
          //  document.getElementById("ta").src = whatObject["taLink"];


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
        clicked_object(object7);
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
        clicked_object(object19);
     }); 
     $("#stay02").click(function() {
        clicked_object(object20);
     }); 
     $("#stay03").click(function() {
        clicked_object(object21);
     }); 
     $("#stay04").click(function() {
        clicked_object(object22);
     }); 
     $("#stay05").click(function() {
        clicked_object(object23);
     }); 
     $("#stay06").click(function() {
        clicked_object(object24);
     }); 
     $("#stay07").click(function() {
        clicked_object(object25);
     }); 
     $("#stay08").click(function() {
        clicked_object(object26);
     }); 
     $("#stay09").click(function() {
        clicked_object(object27);
     }); 

 /* ------ Click functions to show review pages end ------ */


/* XXXXXXXXXXXXX MAPS/REVIEWS START XXXXXXXXXXXXX */



/* BACK-TO BUTTONS START */

$(".backbuttoneat").click(function(){
    $("#eat").show();
    }); 

$(".backbuttondrink").click(function(){
    $("#drink").show();
    }); 
    
$(".backbuttonstay").click(function(){
    $("#stay").show();
    }); 

/* BACK-TO BUTTONS END */



