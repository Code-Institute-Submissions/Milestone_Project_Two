$(document).ready(function() {

/* ******* NAV BAR START ******** */

/* Nav Bar logo */
    $("#navbarbrand").click(function(){
    $("#home").show();
    $("#eat").hide();
    $("#mapeat01").hide();
    $("#mapeat02").hide();
    $("#mapeat03").hide();
    $("#mapeat04").hide();
    $("#mapeat05").hide();
    $("#mapeat06").hide();
    $("#mapeat07").hide();
    $("#mapeat08").hide();
    $("#mapeat09").hide();
    $("#footer").show();
    });    

/* Nav Bar Home */
    $("#navhome").click(function(){
    $("#home").show();
    $("#eat").hide();
    $("#mapeat01").hide();
    $("#mapeat02").hide();
    $("#mapeat03").hide();
    $("#mapeat04").hide();
    $("#mapeat05").hide();
    $("#mapeat06").hide();
    $("#mapeat07").hide();
    $("#mapeat08").hide();
    $("#mapeat09").hide();
    $("#footer").show();
    }); 

/* Nav Bar Eat */
    $("#naveat").click(function(){
    $("#eat").show();
    $("#home").hide();
    $("#mapeat01").hide();
    $("#mapeat02").hide();
    $("#mapeat03").hide();
    $("#mapeat04").hide();
    $("#mapeat05").hide();
    $("#mapeat06").hide();
    $("#mapeat07").hide();
    $("#mapeat08").hide();
    $("#mapeat09").hide();
    $("#footer").hide();
    }); 

/* ******* NAV BAR END ******** */




/* ******* EAT START ******** */

 /* Show Eat Page */
    $("#buttoneat").click(function(){
    $("#eat").show();
    $("#home").hide();
    $("#mapeat01").hide();
    $("#mapeat02").hide();
    $("#mapeat03").hide();
    $("#mapeat04").hide();
    $("#mapeat05").hide();
    $("#mapeat06").hide();
    $("#mapeat07").hide();
    $("#mapeat08").hide();
    $("#mapeat09").hide();
    $("#footer").hide();
    });

    /* Show Eat Page */
    $(".backbuttoneat").click(function(){
    $("#eat").show();
    $("#home").hide();
    $("#mapeat01").hide();
    $("#mapeat02").hide();
    $("#mapeat03").hide();
    $("#mapeat04").hide();
    $("#mapeat05").hide();
    $("#mapeat06").hide();
    $("#mapeat07").hide();
    $("#mapeat08").hide();
    $("#mapeat09").hide();
    $("#footer").hide();
    });

/* Show mapeat01 */
    $("#eat01").click(function(){
    $("#mapeat01").show();
    $("#mapeat02").hide();
    $("#mapeat03").hide();
    $("#mapeat04").hide();
    $("#mapeat05").hide();
    $("#mapeat06").hide();
    $("#mapeat07").hide();
    $("#mapeat08").hide();
    $("#mapeat09").hide();
    $("#home").hide();
    $("#eat").hide();
    $("#footer").hide();
    });

/* Show mapeat02 */
    $("#eat02").click(function(){
    $("#mapeat01").hide();
    $("#mapeat02").show();
    $("#mapeat03").hide();
    $("#mapeat04").hide();
    $("#mapeat05").hide();
    $("#mapeat06").hide();
    $("#mapeat07").hide();
    $("#mapeat08").hide();
    $("#mapeat09").hide();
    $("#home").hide();
    $("#eat").hide();
    $("#footer").hide();
    });

/* Show mapeat03 */
    $("#eat03").click(function(){
    $("#mapeat01").hide();
    $("#mapeat02").hide();
    $("#mapeat03").show();
    $("#mapeat04").hide();
    $("#mapeat05").hide();
    $("#mapeat06").hide();
    $("#mapeat07").hide();
    $("#mapeat08").hide();
    $("#mapeat09").hide();
    $("#home").hide();
    $("#eat").hide();
    $("#footer").hide();
    });

/* Show mapeat04 */
    $("#eat04").click(function(){
    $("#mapeat01").hide();
    $("#mapeat02").hide();
    $("#mapeat03").hide();
    $("#mapeat04").show();
    $("#mapeat05").hide();
    $("#mapeat06").hide();
    $("#mapeat07").hide();
    $("#mapeat08").hide();
    $("#mapeat09").hide();
    $("#home").hide();
    $("#eat").hide();
    $("#footer").hide();
    });

    /* Show mapeat05 */
    $("#eat05").click(function(){
    $("#mapeat01").hide();
    $("#mapeat02").hide();
    $("#mapeat03").hide();
    $("#mapeat04").hide();
    $("#mapeat05").show();
    $("#mapeat06").hide();
    $("#mapeat07").hide();
    $("#mapeat08").hide();
    $("#mapeat09").hide();
    $("#home").hide();
    $("#eat").hide();
    $("#footer").hide();
    });

    /* Show mapeat06 */
    $("#eat06").click(function(){
    $("#mapeat01").hide();
    $("#mapeat02").hide();
    $("#mapeat03").hide();
    $("#mapeat04").hide();
    $("#mapeat05").hide();
    $("#mapeat06").show();
    $("#mapeat07").hide();
    $("#mapeat08").hide();
    $("#mapeat09").hide();
    $("#home").hide();
    $("#eat").hide();
    $("#footer").hide();
    });

    /* Show mapeat07 */
    $("#eat07").click(function(){
    $("#mapeat01").hide();
    $("#mapeat02").hide();
    $("#mapeat03").hide();
    $("#mapeat04").hide();
    $("#mapeat05").hide();
    $("#mapeat06").hide();
    $("#mapeat07").show();
    $("#mapeat08").hide();
    $("#mapeat09").hide();
    $("#home").hide();
    $("#eat").hide();
    $("#footer").hide();
    });

    /* Show mapeat08 */
    $("#eat08").click(function(){
    $("#mapeat01").hide();
    $("#mapeat02").hide();
    $("#mapeat03").hide();
    $("#mapeat04").hide();
    $("#mapeat05").hide();
    $("#mapeat06").hide();
    $("#mapeat07").hide();
    $("#mapeat08").show();
    $("#mapeat09").hide();
    $("#home").hide();
    $("#eat").hide();
    $("#footer").hide();
    });

    /* Show mapeat09 */
    $("#eat09").click(function(){
    $("#mapeat01").hide();
    $("#mapeat02").hide();
    $("#mapeat03").hide();
    $("#mapeat04").hide();
    $("#mapeat05").hide();
    $("#mapeat06").hide();
    $("#mapeat07").hide();
    $("#mapeat08").hide();
    $("#mapeat09").show();
    $("#home").hide();
    $("#eat").hide();
    $("#footer").hide();
    });





/* ******* EAT END ******** */



/* JSON xxxxxx silver map

[
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

xxxxxxxxxxxxx */









}); 
