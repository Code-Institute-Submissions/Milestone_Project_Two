/* Eat Map 

function initMap(){
        const map = new google.maps.Map(document.getElementById("googlemapeat01"), {
            zoom: 16,
            center: {
                lat: 50.821910,
                lng: -0.140770  
            }
        });

        const labels = "ABCDEFGHIJKLMNOPQRSTUVXYZ";

        const locations = [
            { lat: 50.822010, lng: -0.140770 }, 

        ];

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


/* Eat Map 01 start */

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

/* Eat Map 01 end */



