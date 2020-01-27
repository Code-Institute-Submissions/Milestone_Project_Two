/* Eat Map */

function initMap(){
        const map = new google.maps.Map(document.getElementById("googlemapeat01"), {
            zoom: 15,
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

    /* old Eat Map 01 end */


/* Eat Map 01 start 

function initMap() {
  const googlemapeat01 = {lat: 50.821910, lng: -0.140770};

  const map = new google.maps.Map(document.getElementById('googlemapeat01'), {
    zoom: 16,
    center: googlemapeat01
  });

  const marker = new google.maps.Marker({
    position: googlemapeat01,
    map: map,
    title: '64 Degrees'
  });
}

Eat Map 01 end */



