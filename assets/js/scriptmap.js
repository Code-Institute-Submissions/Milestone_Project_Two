/* Eat Map 01 Start */

function initMap(){
        const map = new google.maps.Map(document.getElementById("googlemapeat01"), {
            zoom: 16,
            center: {
                lat: 50.821910,
                lng: -0.140770  /* 64 Degrees */
            }
        });

        const labels = "ABCDEFGHIJKLMNOPQRSTUVXYZ";

        const locations = [
            { lat: 50.822010, lng: -0.140770 }, /* 64 Degrees */

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

    /* Eat Map 01 end */


