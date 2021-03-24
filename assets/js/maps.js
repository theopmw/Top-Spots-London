function initMap() {
    const mapProp = {
        center: new google.maps.LatLng(51.50146775108939, -0.12200993061141865), // Set the coordinates of the centre of the map
        zoom: 12, // Set the zoom level of the map
    };

    const map = new google.maps.Map(document.getElementById("map"), mapProp);
}

// initMap();