let map;

// Empty marker arrays by venue type (Filled by markerToArray function)
let restaurantMarkers = [];
let pubMarkers = [];
let cocktailBarMarkers = [];
let streetMarkers = [];
let breweryMarkers = [];
let distilleryMarkers = [];

function initMap() {
    const mapProp = { // Create a variable to store the map properties
        center: new google.maps.LatLng(51.50146775108939, -0.12200993061141865), // Set the coordinates of the centre of the map
        zoom: 12, // Set the zoom level of the map
    };

    map = new google.maps.Map(document.getElementById("map"), mapProp); // Creates a new map inside the div that has the id of "map" and calls mapProp to see how to render the map

    // Credit: Map marker positioning and creation of custom Google Maps markers taken from https://developers.google.com/maps/documentation/javascript/custom-markers#maps_custom_markers-javascript
    // Credit: Custom marker icons taken from Map Icons Collection https://mapicons.mapsmarker.com/
    // Credit: Marker icon images hosted on https://imgbb.com/

    // Set all icon types
    const iconBase =
        "https://i.ibb.co/";
    const icons = {
        restaurant: {
            icon: iconBase + "TtkWP50/restaurant.png", // Restaurant icon
        },
        pub: {
            icon: iconBase + "LP8Nh1S/pub.png", // Pub icon
        },
        cocktail: {
            icon: iconBase + "jyk4yGP/cocktail-bar.png", // Cocktail bar icon
        },
        street: {
            icon: iconBase + "W57zW65/street-food-market.png", // Street food market icon
        },
        brewery: {
            icon: iconBase + "6nd9sFh/brewery.png", // Brewery icon
        },
        distillery: {
            icon: iconBase + "gdFtTFr/distillery.png", // Distillery icon
        }
    };

    // Store all venues in an array
    const venues = [
        // South London
        { // Pop Brixton
            content: "<h4>Pop Brixton</h4>",
            name: "Pop Brixton",
            position: new google.maps.LatLng(51.46341404023569, -0.11228722008675468),
            type: "street",
        },
        { // Tola
            position: new google.maps.LatLng(51.473367183358455, -0.07046348616823567),
            type: "cocktail",
        },
        { // Peckham Levels
            position: new google.maps.LatLng(51.471557276187816, -0.06720426931757024),
            type: "street",
        },
        { // Balham Bowls Club
            position: new google.maps.LatLng(51.445067652541034, -0.15250217267682872),
            type: "pub",
        },
        { // Brunswick House
            position: new google.maps.LatLng(51.484885901267916, -0.12661603219847756),
            type: "restaurant",
        },
        { // Mondo Brewery
            position: new google.maps.LatLng(51.47515303781801, -0.14036621534394356),
            type: "brewery",
        },
        { // Haymans Gin Distillery
            position: new google.maps.LatLng(51.445578111741455, -0.14422145331540792),
            type: "distillery",
        },
         { // The Laundry
            position: new google.maps.LatLng(51.46288429684225, -0.1110045386230423),
            type: "restaurant",
        },
    ];
    // toMarkerArray was here
    // markerToArray function to take any venue, make a maker and push it into the specific array
    function markerToArray(venue, arrayName) {
        const marker = new google.maps.Marker({
            position: venue.position, // sets marker position to venue.position
            icon: icons[venue.type].icon,
            map: map,
        });

        arrayName.push(marker)

    };

    // Loop over the venues and for each venue, depending on the type, call the markerToArray function (with the venue and specific array passed as arguments)
    for (let i = 0; i < venues.length; i++) {
        if (venues[i].type === "restaurant") {
            markerToArray(venues[i], restaurantMarkers);
        } else if (venues[i].type === "pub") {
            markerToArray(venues[i], pubMarkers);
        } else if (venues[i].type === "cocktail") {
            markerToArray(venues[i], cocktailBarMarkers);
        } else if (venues[i].type === "street") {
            markerToArray(venues[i], streetMarkers);
        } else if (venues[i].type === "brewery") {
            markerToArray(venues[i], breweryMarkers);
        } else if (venues[i].type === "distillery") {
            markerToArray(venues[i], distilleryMarkers);
        }
    };

    console.log(streetMarkers);
    console.log(streetMarkers[0]);
    console.log(streetMarkers[1]);
    console.log(restaurantMarkers);

    // Check all legend checkboxes on page load
    // Credit: https://stackoverflow.com/questions/3126736/check-all-checkboxes-on-page-load-with-jquery
    $(function () {
        $('#legend input:checkbox').attr('checked', 'checked');
    });

    // ------------------------------------Restaurant Markers

    // Sets the map on all markers in the restaurantMarkers array.
    function restaurantSetMapOnAll(map) {
        for (let i = 0; i < restaurantMarkers.length; i++) {
            restaurantMarkers[i].setMap(map);
        }
    }

    // Target id=restarant-checkbox and add event listener for change event
    // Credit: Code used for event listener modified from https://stackoverflow.com/questions/14544104/checkbox-check-event-listener
    // Credit: Code used for showMarkers function modified from https://developers.google.com/maps/documentation/javascript/examples/marker-remove

    let restaurantCheckbox = document.querySelector("input[id=restaurant-checkbox]");
    restaurantCheckbox.addEventListener('change', function () {
        if (this.checked) {
            // Shows any markers currently in the array
            restaurantSetMapOnAll(map);
            // function showMarkers() {
            //     restaurantSetMapOnAll(map);
            // }
            // showMarkers();
        } else {
            // Hides any markers currently in the array
            restaurantSetMapOnAll(null);
            // function clearMarkers() {
            //     restaurantSetMapOnAll(null);
            // }
            // clearMarkers();
        }
    });

    // ------------------------------------Pub Markers

    // Sets the map on all markers in the pubMarkers array.
    function pubSetMapOnAll(map) {
        for (let i = 0; i < pubMarkers.length; i++) {
            pubMarkers[i].setMap(map);
        }
    }

    // Target id=pub-checkbox and add event listener for change event
    // Credit: Code used for event listener modified from https://stackoverflow.com/questions/14544104/checkbox-check-event-listener
    // Credit: Code used for showMarkers function modified from https://developers.google.com/maps/documentation/javascript/examples/marker-remove

    let pubCheckbox = document.querySelector("input[id=pub-checkbox]");
    pubCheckbox.addEventListener('change', function () {
        if (this.checked) {
            // Shows any markers currently in the array
            pubSetMapOnAll(map);
        } else {
            // Hides any markers currently in the array
            pubSetMapOnAll(null)
        }
    });

    // ------------------------------------Cocktail Bar Markers

    // Sets the map on all markers in the cocktailMarkers array.
    function cocktailSetMapOnAll(map) {
        for (let i = 0; i < cocktailBarMarkers.length; i++) {
            cocktailBarMarkers[i].setMap(map);
        }
    }

    // Target id=cocktail-bar-checkbox and add event listener for change event
    // Credit: Code used for event listener modified from https://stackoverflow.com/questions/14544104/checkbox-check-event-listener
    // Credit: Code used for showMarkers function modified from https://developers.google.com/maps/documentation/javascript/examples/marker-remove

    let cocktailCheckbox = document.querySelector("input[id=cocktail-bar-checkbox]");
    cocktailCheckbox.addEventListener('change', function () {
        if (this.checked) {
            // Shows any markers currently in the array
            cocktailSetMapOnAll(map);
        } else {
            // Hides any markers currently in the array
            cocktailSetMapOnAll(null)
        }
    });

    // ------------------------------------Street Food Market Markers

    // Sets the map on all markers in the streetMarkers array.
    function streetSetMapOnAll(map) {
        for (let i = 0; i < streetMarkers.length; i++) {
            streetMarkers[i].setMap(map);
        }
    }

    // Target id=street-food-market-checkbox and add event listener for change event
    // Credit: Code used for event listener modified from https://stackoverflow.com/questions/14544104/checkbox-check-event-listener
    // Credit: Code used for showMarkers function modified from https://developers.google.com/maps/documentation/javascript/examples/marker-remove

    let streetCheckbox = document.querySelector("input[id=street-food-market-checkbox]");
    streetCheckbox.addEventListener('change', function () {
        if (this.checked) {
            // Shows any markers currently in the array
            streetSetMapOnAll(map);
        } else {
            // Hides any markers currently in the array
            streetSetMapOnAll(null)
        }
    });

// ------------------------------------Brewery Markers

    // Sets the map on all markers in the breweryMarkers array.
    function brewerySetMapOnAll(map) {
        for (let i = 0; i < breweryMarkers.length; i++) {
            breweryMarkers[i].setMap(map);
        }
    }

    // Target id=brewery-checkbox and add event listener for change event
    // This logs a messsage to the console when the box is checked and unchecked
    // Credit: Code used for event listener modified from https://stackoverflow.com/questions/14544104/checkbox-check-event-listener
    // Credit: Code used for showMarkers function modified from https://developers.google.com/maps/documentation/javascript/examples/marker-remove

    let breweryCheckbox = document.querySelector("input[id=brewery-checkbox]");
    breweryCheckbox.addEventListener('change', function () {
        if (this.checked) {
            // Shows any markers currently in the array
            brewerySetMapOnAll(map);
        } else {
            // Hides any markers currently in the array
            brewerySetMapOnAll(null)
        }
    });

// ------------------------------------Distillery Markers

    // Sets the map on all markers in the distilleryMarkers array.
    function distillerySetMapOnAll(map) {
        for (let i = 0; i < distilleryMarkers.length; i++) {
            distilleryMarkers[i].setMap(map);
        }
    }

    // Target id=distillery-checkbox and add event listener for change event
    // This logs a messsage to the console when the box is checked and unchecked
    // Credit: Code used for event listener modified from https://stackoverflow.com/questions/14544104/checkbox-check-event-listener
    // Credit: Code used for showMarkers function modified from https://developers.google.com/maps/documentation/javascript/examples/marker-remove

    let distilleryCheckbox = document.querySelector("input[id=distillery-checkbox]");
    distilleryCheckbox.addEventListener('change', function () {
        if (this.checked) {
            // Shows any markers currently in the array
            distillerySetMapOnAll(map);
        } else {
            // Hides any markers currently in the array
            distillerySetMapOnAll(null)
        }
    });

}; // initMap END --------------------------------





initMap();
