let map;

let venues;

// Set variables to target div ids from index.html
let venueName = document.getElementById("name");
let venueAddress = document.getElementById("address");
let venueDescription = document.getElementById("description");
let venueWebsite = document.getElementById("website");
let venueFacebook = document.getElementById("facebook");
let venueTwitter = document.getElementById("twitter");
let venueInstagram = document.getElementById("instagram");
let venueTripadvisor = document.getElementById("tripadvisor");

// Or use JQuery:
// let venueName = $("#name");

console.log(venueName);

// Empty marker arrays by venue type (Filled by markerToArray function)
let restaurantMarkers = [];
let pubMarkers = [];
let cocktailBarMarkers = [];
let streetMarkers = [];
let breweryMarkers = [];
let distilleryMarkers = [];

initMap();
function initMap() {
    const mapProp = {
        // Create a variable to store the map properties
        center: new google.maps.LatLng(51.50146775108939, -0.12200993061141865), // Set the coordinates of the centre of the map
        zoom: 12, // Set the zoom level of the map
    };

    map = new google.maps.Map(document.getElementById("map"), mapProp); // Creates a new map inside the div that has the id of "map" and calls mapProp to see how to render the map

    // Credit: Map marker positioning and creation of custom Google Maps markers taken from https://developers.google.com/maps/documentation/javascript/custom-markers#maps_custom_markers-javascript
    // Credit: Custom marker icons taken from Map Icons Collection https://mapicons.mapsmarker.com/
    // Credit: Marker icon images hosted on https://imgbb.com/

    // Set all icon types
    const iconBase = "https://i.ibb.co/";
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
        },
    };

    // Store all venues in an array
    venues = [
        // South London
        {
            // Pop Brixton
            name: "Pop Brixton",
            address: "49 Brixton Station Rd, Brixton, London, SW9 8PQ",
            // Credit: text taken from https://www.popbrixton.org/
            description:
                "Pop Brixton is a temporary project that has turned disused land into a creative space for local, independent businesses. Come and discover South London’s most exciting start-ups working in food, retail, design and social enterprise.",
            website: "https://www.popbrixton.org/",
            facebook: "https://www.facebook.com/popbrixton/",
            twitter: "https://twitter.com/PopBrixton",
            instagram: "https://www.instagram.com/popbrixton/",
            tripadvisor:
                "https://www.tripadvisor.co.uk/Attraction_Review-g186338-d8441770-Reviews-Pop_Brixton-London_England.html",
            position: new google.maps.LatLng(
                51.46341404023569,
                -0.11228722008675468
            ),
            type: "street",
        },
        {
            // Tola
            name: "Tola",
            address: "56 Peckham High St, Peckham, London, SE15 5DP",
            // Credit: text taken from https://www.tolapeckham.com/
            description:
                "Tola is a late night music venue, bar and roof terrace situated in the heart of Peckham.",
            website: "https://www.tolapeckham.com/",
            facebook: "https://www.facebook.com/tolapeckham/?_rdc=1&_rdr",
            twitter: "",
            instagram: "https://www.instagram.com/tolapeckham/",
            tripadvisor:
                "",
            position: new google.maps.LatLng(
                51.473367183358455,
                -0.07046348616823567
            ),
            type: "cocktail",
        },
        {
            // Peckham Levels
            name: "Peckham Levels",
            address: "F1-F6 Peckham Town Centre Carpark, 95A Rye Ln, London, SE15 4ST",
            // Credit: text taken from https://peckhamlevels.org/
            description:
                "There’s a whole host of things to do at Peckham Levels – from street food and bars, to a yoga studio and beauty salon.",
            website: "https://peckhamlevels.org/",
            facebook: "https://www.facebook.com/peckhamlevels/",
            twitter: "https://twitter.com/peckhamlevels/",
            instagram: "https://www.instagram.com/peckhamlevels/",
            tripadvisor:
                "",
            position: new google.maps.LatLng(
                51.471557276187816,
                -0.06720426931757024
            ),
            type: "street",
        },
        {
            // Balham Bowls Club
            name: "Balham Bowls Club",
            address: "7-9 Ramsden Rd, Balham, London, SW12 8QX",
            // Credit: text taken from https://balhambowlsclub.com/
            description:
                "Charming pub and restaurant set in an old bowling club with a large beer garden, two large function rooms for hire and a diverse programme of events.",
            website: "https://balhambowlsclub.com/",
            facebook: "https://www.facebook.com/pages/Balham%20Bowls%20Club/240883992993515/",
            twitter: "https://twitter.com/balhambowls?lang=en/",
            instagram: "https://www.instagram.com/balhambowls/?hl=en",
            tripadvisor:
                "https://www.tripadvisor.co.uk/Restaurant_Review-g186338-d3492324-Reviews-Balham_Bowls_Club-London_England.html",
            position: new google.maps.LatLng(
                51.445067652541034,
                -0.15250217267682872
            ),
            type: "pub",
        },
        {
            // Brunswick House
            name: "Brunswick House",
            address: "30 Wandsworth Rd, Vauxhall, London, SW8 2LG",
            // Credit: text taken from https://brunswickhouse.london/
            description:
                "Serving Breakfast, Lunch and Dinner in the crumbling grandeur of and antique-filled Georgian mansion, built for the Duke of Brunswick in 1758. Heated outdoor terrace, cocktail bar, romantic candle-lit dining room, intimate private rooms for eating and celebrating, historic vaulted cellars with an incredible list of rare wines and bar snacks.",
            website: "https://brunswickhouse.london/",
            facebook: "https://www.facebook.com/BrunswickHouseLondon/",
            twitter: "https://twitter.com/brunswickhse?lang=en",
            instagram: "https://www.instagram.com/brunswick_house/",
            tripadvisor:
                "https://www.tripadvisor.co.uk/Restaurant_Review-g186338-d2402977-Reviews-Brunswick_House-London_England.html",
            position: new google.maps.LatLng(
                51.484885901267916,
                -0.12661603219847756
            ),
            type: "restaurant",
        },
        {
            // Mondo Brewery
            name: "Mondo Brewing Company",
            address: "86 Stewart's Rd, Nine Elms, London, SW8 4UG",
            // Credit: text taken from https://mondobeer.com/
            description:
                "Mondo Brewing is an independent brewery grounded in London, founded in 2014 by two Americans. A stone’s throw away from the iconic Battersea Power Station, their brewery and tap house are nestled just a few hundred yards south of there, waiting to be discovered by thirsty patrons.",
            website: "https://mondobeer.com/",
            facebook: "https://www.facebook.com/mondobrewing/",
            twitter: "https://twitter.com/mondobrewing",
            instagram: "https://www.instagram.com/mondobrewing/",
            tripadvisor:
                "",
            position: new google.maps.LatLng(
                51.47515303781801,
                -0.14036621534394356
            ),
            type: "brewery",
        },
        {
            // The Laundry
            name: "The Laundry",
            address: "374 Coldharbour Ln, Brixton, London SW9 8PL",
            // Credit: text taken from https://thelaundrybrixton.com/
            description:
                "The Laundry is an all day neighbourhood dining destination. Set in the heart of Brixton on Coldharbour Lane, The Laundry is a bustling all-day neighbourhood Bistro, Wine Shop & Café with a heated terrace.",
            website: "https://thelaundrybrixton.com/",
            facebook: "https://www.facebook.com/brixtonlaundry/",
            twitter: "",
            instagram: "https://www.instagram.com/brixtonlaundry/",
            tripadvisor:
                "https://www.tripadvisor.co.uk/Restaurant_Review-g186338-d19430377-Reviews-The_Laundry-London_England.html",
            position: new google.maps.LatLng(
                51.46288429684225,
                -0.1110045386230423
            ),
            type: "restaurant",
        },
    ];

    // markerToArray function to take any venue, make a maker and push it into the specific array
    function markerToArray(venue, arrayName) {
        const marker = new google.maps.Marker({
            position: venue.position, // sets marker position to venue.position
            icon: icons[venue.type].icon, // sets marker icon
            map: map,
        });

        // Click event listener to listen for marker click and push venue data to the corresponding div in the DOM
        marker.addListener("click", () => {
            venueName.innerHTML = venue.name;
            venueAddress.innerHTML = venue.address;
            venueDescription.innerHTML = venue.description;
            venueWebsite.innerHTML = `<a href="${venue.website}" target="_blank" rel="noopener">
            <span class="sr-only">Website</span>Visit ${venue.name} Website</a>`;
            venueFacebook.innerHTML = `<a href="${venue.facebook}" target="_blank" rel="noopener">
            <i class="fab fa-facebook-f" aria-hidden="true"></i><span class="sr-only">Facebook</span>`;
            venueTwitter.innerHTML =  `<a href="${venue.twitter}" target="_blank" rel="noopener">
            <i class="fab fa-twitter" aria-hidden="true"></i>
            <span class="sr-only">Twitter</span>`;
            venueInstagram.innerHTML = `<a href="${venue.instagram}" target="_blank" rel="noopener">
            <i class="fab fa-instagram" aria-hidden="true"></i>
            <span class="sr-only">Instagram</span>`
            venueTripadvisor.innerHTML = `<a href="${venue.tripadvisor}" target="_blank" rel="noopener">
            <i class="fab fa-tripadvisor" aria-hidden="true"></i>
            <span class="sr-only">Trip Advisor</span>`
        });

        arrayName.push(marker);
    }

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
    }

    // Check all legend checkboxes on page load
    // Credit: https://stackoverflow.com/questions/3126736/check-all-checkboxes-on-page-load-with-jquery
    $(function () {
        $("#legend input:checkbox").attr("checked", "checked");
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

    let restaurantCheckbox = document.querySelector(
        "input[id=restaurant-checkbox]"
    );
    restaurantCheckbox.addEventListener("change", function () {
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
    pubCheckbox.addEventListener("change", function () {
        if (this.checked) {
            // Shows any markers currently in the array
            pubSetMapOnAll(map);
        } else {
            // Hides any markers currently in the array
            pubSetMapOnAll(null);
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

    let cocktailCheckbox = document.querySelector(
        "input[id=cocktail-bar-checkbox]"
    );
    cocktailCheckbox.addEventListener("change", function () {
        if (this.checked) {
            // Shows any markers currently in the array
            cocktailSetMapOnAll(map);
        } else {
            // Hides any markers currently in the array
            cocktailSetMapOnAll(null);
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

    let streetCheckbox = document.querySelector(
        "input[id=street-food-market-checkbox]"
    );
    streetCheckbox.addEventListener("change", function () {
        if (this.checked) {
            // Shows any markers currently in the array
            streetSetMapOnAll(map);
        } else {
            // Hides any markers currently in the array
            streetSetMapOnAll(null);
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
    // Credit: Code used for event listener modified from https://stackoverflow.com/questions/14544104/checkbox-check-event-listener
    // Credit: Code used for showMarkers function modified from https://developers.google.com/maps/documentation/javascript/examples/marker-remove

    let breweryCheckbox = document.querySelector("input[id=brewery-checkbox]");
    breweryCheckbox.addEventListener("change", function () {
        if (this.checked) {
            // Shows any markers currently in the array
            brewerySetMapOnAll(map);
        } else {
            // Hides any markers currently in the array
            brewerySetMapOnAll(null);
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
    // Credit: Code used for event listener modified from https://stackoverflow.com/questions/14544104/checkbox-check-event-listener
    // Credit: Code used for showMarkers function modified from https://developers.google.com/maps/documentation/javascript/examples/marker-remove

    let distilleryCheckbox = document.querySelector(
        "input[id=distillery-checkbox]"
    );
    distilleryCheckbox.addEventListener("change", function () {
        if (this.checked) {
            // Shows any markers currently in the array
            distillerySetMapOnAll(map);
        } else {
            // Hides any markers currently in the array
            distillerySetMapOnAll(null);
        }
    });

    // ------------------------------------Show/Hide All Checkbox

    // Target id=show-hide-all-checkbox and add event listener for change event
    // Credit: Code used for event listener modified from https://stackoverflow.com/questions/14544104/checkbox-check-event-listener
    // Credit: Code used for showMarkers function modified from https://developers.google.com/maps/documentation/javascript/examples/marker-remove

    let showHideCheckbox = document.querySelector(
        "input[id=show-hide-all-checkbox]"
    );
    showHideCheckbox.addEventListener("change", function () {
        if (this.checked) {
            // Shows any markers currently in the below arrays
            restaurantSetMapOnAll(map);
            pubSetMapOnAll(map);
            cocktailSetMapOnAll(map);
            streetSetMapOnAll(map);
            brewerySetMapOnAll(map);
            distillerySetMapOnAll(map);
        } else {
            // Hides any markers currently in the below arrays
            restaurantSetMapOnAll(null);
            pubSetMapOnAll(null);
            cocktailSetMapOnAll(null);
            streetSetMapOnAll(null);
            brewerySetMapOnAll(null);
            distillerySetMapOnAll(null);
        }
    });

    // Check or uncheck all venue type marker checkboxes when "Show/Hide All" checkbox is checked or unchecked
    // Credit: JQuery code modified from https://stackoverflow.com/questions/5229023/how-do-i-check-uncheck-all-checkboxes-with-a-button-using-jquery
    $("#show-hide-all-checkbox").change(function () {
        $(".venue-type-checkbox").prop("checked", $(this).prop("checked"));
    });

    // Loop through venues and add click event listener (can I use markers here?)
    // Could help: https://stackoverflow.com/questions/44288505/passing-in-array-data-into-div-elements
    // venues.forEach(venue => {
    //     venue.addEventListener("click", () => { // Create a function to call here? Push() array items into selected div?
    //         venueName.innerHTML = venues.name;
    //         venueAddress.innerHTML = venues.address;
    //     })
    // });


} // initMap END --------------------------------
