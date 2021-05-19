let map;

let venues;

// Set variables to target div ids from index.html
let venueName = document.getElementById("name");
let venueAddress = document.getElementById("address");
let venueDescription = document.getElementById("description");
let venueWebsite = document.getElementById("website");
let venueBooking = document.getElementById("booking");
let venueFacebook = document.getElementById("facebook");
let venueTwitter = document.getElementById("twitter");
let venueInstagram = document.getElementById("instagram");
let venueTripadvisor = document.getElementById("tripadvisor");
let heroImage = document.getElementById("hero-image");
let venueImage1 = document.getElementById("image1");
let venueImage2 = document.getElementById("image2");
let venueImage3 = document.getElementById("image3");



// Or use JQuery:
// let venueName = $("#name");

// Empty marker arrays by venue type (Filled by markerToArray function)
let restaurantMarkers = [];
let pubMarkers = [];
let cocktailBarMarkers = [];
let streetMarkers = [];
let breweryMarkers = [];
let distilleryMarkers = [];

// Preloader animation (.gif)
$(window).on("load", function () {
    initMap();
    setTimeout(() => {
        $("#container-loader").fadeOut();
    }, 1000);
});

// initMap();
function initMap() {
    const mapProp = {
        // Create a variable to store the map properties
        center: new google.maps.LatLng(51.50146775108939, -0.12200993061141865), // Set the coordinates of the centre of the map
        zoom: 12, // Set the zoom level of the map
        // Credit: control options modified from https://developers.google.com/maps/documentation/javascript/controls
        fullscreenControl: false,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.BOTTOM_CENTER,

        }
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
        // --------------------------------------------Restaurants
        {
            // Brunswick House
            name: "Brunswick House",
            address: "30 Wandsworth Rd, Vauxhall, London, SW8 2LG",
            // Credit: text taken from https://brunswickhouse.london/
            description:
                "Serving Breakfast, Lunch and Dinner in the crumbling grandeur of and antique-filled Georgian mansion, built for the Duke of Brunswick in 1758. Heated outdoor terrace, cocktail bar, romantic candle-lit dining room, intimate private rooms for eating and celebrating, historic vaulted cellars with an incredible list of rare wines and bar snacks.",
            website: "https://brunswickhouse.london/",
            booking: "https://resy.com/cities/ldn/brunswick-house?date=2021-05-07&seats=2",
            facebook: "https://www.facebook.com/BrunswickHouseLondon/",
            twitter: "https://twitter.com/brunswickhse?lang=en",
            instagram: "https://www.instagram.com/brunswick_house/",
            tripadvisor:
                "https://www.tripadvisor.co.uk/Restaurant_Review-g186338-d2402977-Reviews-Brunswick_House-London_England.html",
            image1: "assets/images/venue_images/brunswick_house/brunswick_house_exterior.png",
            image1Alt: "Brunswick House Exterior",
            image2: "assets/images/venue_images/brunswick_house/brunswick_house_interior.png",
            image2Alt: "Brunswick House Interior",
            image3: "assets/images/venue_images/brunswick_house/brunswick_house_food.png",
            image3Alt: "Brunswick House Food",
            position: new google.maps.LatLng(
                51.484885901267916,
                -0.12661603219847756
            ),
            type: "restaurant",
        },
        {
            // The Laundry
            name: "The Laundry",
            address: "374 Coldharbour Ln, Brixton, London SW9 8PL",
            // Credit: text taken from https://thelaundrybrixton.com/
            description:
                "The Laundry is an all day neighbourhood dining destination. Set in the heart of Brixton on Coldharbour Lane, The Laundry is a bustling all-day neighbourhood Bistro, Wine Shop & Café with a heated terrace.",
            website: "https://thelaundrybrixton.com/",
            booking: "https://thelaundrybrixton.com/reservations",
            facebook: "https://www.facebook.com/brixtonlaundry/",
            twitter: "#",
            instagram: "https://www.instagram.com/brixtonlaundry/",
            tripadvisor:
                "https://www.tripadvisor.co.uk/Restaurant_Review-g186338-d19430377-Reviews-The_Laundry-London_England.html",
            image1: "assets/images/venue_images/the_laundry/the_laundry_exterior.png",
            image1Alt: "Exterior of The Laundry, Brixton",
            image2: "assets/images/venue_images/the_laundry/the_laundry_food.png",
            image2Alt: "The Laundry Food",
            image3: "assets/images/venue_images/the_laundry/the_laundry_drink.png",
            image3Alt: "Drink being poured",
            position: new google.maps.LatLng(
                51.46288429684225,
                -0.1110045386230423
            ),
            type: "restaurant",
        },
        {
            // Bar Douro, London Bridge
            name: "Bar Douro",
            address: "35B, Arch, 85B Southwark Bridge Rd, London, SE1 0NQ",
            // Credit: text taken from https://www.bardouro.co.uk/london-bridge
            description:
                "Occupying a railway arch in London's buzzing Flat Iron Square, Bar Douro was created as a way to bring authentic Portuguese food to London. With ties to Portugal traced back through the family, Bar Douro has matched exquisite Portuguese wines with all the tradition of local Portuguese food. The atmospheric 30-cover marble counter-top dining space offers an intimate window to the best of Portuguese culinary heritage.",
            website: "https://www.bardouro.co.uk/london-bridge",
            booking: "https://www.bardouro.co.uk/london-bridge",
            facebook: "https://www.facebook.com/bardourouk/",
            twitter: "https://twitter.com/bardouro",
            instagram: "https://www.instagram.com/bardouro/",
            tripadvisor:
                "https://www.tripadvisor.co.uk/Restaurant_Review-g186338-d11856169-Reviews-Bar_Douro_London_Bridge-London_England.html",
            image1: "assets/images/venue_images/bar_douro/bar_douro_interior.png",
            image1Alt: "Bar Douro Interior",
            image2: "assets/images/venue_images/bar_douro/bar_douro_food.png",
            image2Alt: "Bar Douro Food",
            image3: "assets/images/venue_images/bar_douro/bar_douro_exterior.png",
            image3Alt: "Bar Douro Exterior",
            position: new google.maps.LatLng(
                51.50460622554422,
                -0.09526187321534595
            ),
            type: "restaurant",
        },
        {
            // The Tapas Room, Brixton Village
            name: "The Tapas Room, Brixton Village",
            address:
                "Unit 52, Brixton Village, Coldharbour Ln, Brixton, London, SW9 8PS",
            // Credit: text taken from https://www.thetapasroom.co.uk/
            description:
                "Wine Shop, Tapas Bar & Delicatessen, The Tapas Room presents an unrivalled & thorough range of specialist Spanish & Basque Wine, Sherry, Cava, Vermouth and Craft Beers alongside a refined Tapas, charcuterie, cheese & deli menu. The Tapas Room is the sister business to the acclaimed street food van and Pop Brixton restaurant Donostia Social Club and the associated DSC Imports which specialises in the exclusive distribution of Basque and Spanish wines & beers to the London bar and restaurant industry. The Tapas Room was launched in order to encourage a culture of learning more about Spanish wine, with the result of drinking better for less, in an intimate and friendly environment.",
            website: "https://www.thetapasroom.co.uk/",
            booking: "https://www.thetapasroom.co.uk/",
            facebook: "https://www.facebook.com/thetapasroom",
            twitter: "https://twitter.com/thetapasroom",
            instagram: "https://www.instagram.com/thetapasroom/",
            tripadvisor:
                "https://www.tripadvisor.co.uk/Restaurant_Review-g186338-d21237612-Reviews-The_Tapas_Room-London_England.html",
            image1: "assets/images/venue_images/tapas_room/tapas_room_interior.png",
            image1Alt: "Tapas Room Interior",
            image2: "assets/images/venue_images/tapas_room/tappas_room_food.png",
            image2Alt: "Plate of meats and caperberries",
            image3: "assets/images/venue_images/tapas_room/tapas_room_exterior.png",
            image3Alt: "Tapas Room Exterior",
            position: new google.maps.LatLng(
                51.462593456997624,
                -0.11181741121010706
            ),
            type: "restaurant",
        },
        {
            // Peckham Cellars
            name: "Peckham Cellars",
            address: "125 Queen's Rd, Peckham, London, SE15 2ND",
            // Credit: text taken from https://peckhamcellars.co.uk/
            description:
                "Your local South-East spot for buying and drinking great wines and eating delicious, seasonally-focused food. Peckham Cellars is your friendly neighbourhood wine bar and shop with a bonus wine delivery service!  The complete package for all your wining and dining needs. Peckham Cellars is a Bib Gourmand Winner 2021.",
            website: "https://peckhamcellars.co.uk/",
            booking: "https://resy.com/cities/ldn/peckham-cellars?date=2021-05-07&seats=2",
            facebook: "https://www.facebook.com/peckhamcellars/",
            twitter: "https://twitter.com/peckhamcellars?lang=en",
            instagram: "https://www.instagram.com/peckhamcellars/?hl=en",
            tripadvisor:
                "https://www.tripadvisor.co.uk/Restaurant_Review-g186338-d20083945-Reviews-Peckham_Cellars-London_England.html",
            image1: "assets/images/venue_images/peckham_cellars/peckham_cellars_wine.png",
            image1Alt: "Wine selection at Peckham Cellars",
            image2: "assets/images/venue_images/peckham_cellars/peckham_cellars_exterior.png",
            image2Alt: "Peckham Cellars exterior",
            image3: "assets/images/venue_images/peckham_cellars/peckham_cellars_burger.png",
            image3Alt: "Peckham Cellars chicken burder with hash brown",
            position: new google.maps.LatLng(
                51.47387240142246,
                -0.05882183068764925
            ),
            type: "restaurant",
        },
        {
            // Smoking Goat
            name: "Smoking Goat",
            address: "64 Shoreditch High St, Shoreditch, London, E1 6JJ",
            // Credit: text taken from https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TEkrryyzSEo3YLRSNagwsTA3M0xOMkgyTzZMMzFIsjKoMDRNNjQ1TUpLS7RIMrG0MPPiKc7Nz87MS1dIz08sAQCmGRRj&q=smoking+goat&rlz=1C5CHFA_enGB919GB919&oq=smoking+&aqs=chrome.1.69i57j46i131i175i199i433j0i433l6j0.2861j0j4&sourceid=chrome&ie=UTF-8
            description:
                "Cool, laid-back restaurant with quirky dishes & drinks inspired by Bangkok’s late-night canteens.",
            website: "https://www.smokinggoatbar.com/",
            bookoing: "https://smokinggoatbar.com/reservations/",
            facebook:
                "https://www.facebook.com/Smoking-Goat-Shoreditch-815145515363047/",
            twitter: "#",
            instagram: "https://www.instagram.com/smokinggoatbar/",
            tripadvisor:
                "https://www.tripadvisor.co.uk/Restaurant_Review-g186338-d13078857-Reviews-Smoking_Goat_Shoreditch-London_England.html",
            image1: "assets/images/venue_images/smoking_goat/smoking_goat_chilli_fish_sauce_wings.png",
            image1Alt: "Chilli Fish Sauce Wings at Smoking Goat",
            image2: "assets/images/venue_images/smoking_goat/smoking_goat_bar.png",
            image2Alt: "Bar at Smoking Goat",
            image3: "assets/images/venue_images/smoking_goat/smoking_goat_interior.png",
            image3Alt: "Smoking Goat interior",
            position: new google.maps.LatLng(
                51.52495237670227,
                -0.07757001481354464
            ),
            type: "restaurant",
        },
        {
            // Din Tai Fung
            name: "Din Tai Fung",
            address: "5 Henrietta St, Covent Garden, London, WC2E 8PS",
            description:
                "Taiwan is know for producing somne of the best dumplings in the world and it's Din Tai Fung that perfected the art. They specialise in the Xiao Long Bao (or XLB for short). The soup filled dumplings are just otherworldly! Each variation filled with a perfectly blended mix of broth paired with a fragrant filling",
            website: "https://www.dintaifung-uk.com/",
            booking: "https://www.dintaifung-uk.com/reservations/",
            facebook: "https://www.facebook.com/dintaifunguk/",
            twitter: "#",
            instagram: "https://www.instagram.com/dintaifunguk/?hl=en",
            tripadvisor:
                "https://www.tripadvisor.co.uk/Restaurant_Review-g186338-d15599297-Reviews-Din_Tai_Fung_UK-London_England.html",
            image1: "assets/images/venue_images/din_tai_fung/din_tai_fung_food.png",
            image1Alt: "Table with dumplings, fried rice and greens",
            image2: "assets/images/venue_images/din_tai_fung/din_tai_fung_dumplings.png",
            image2Alt: "Chef holding tray of dumplings",
            image3: "assets/images/venue_images/din_tai_fung/din_tai_fung_bartender.png",
            image3Alt: "Bartender pouring a drink at the bar",
            position: new google.maps.LatLng(
                51.51128445720902,
                -0.12321491534128642
            ),
            type: "restaurant",
        },
        {
            // Buona Sera
            name: "Buona Sera",
            address: "22-26 Northcote Rd, London, SW11 1NX",
            description:
                "Italian restaurant serving up traditional staples. A family run, bright and airy venue. Relaxed atmosphere with professional, friendly service.",
            website: "https://www.buonasera.co.uk/",
            booking: "https://www.buonasera.co.uk/visit",
            facebook:
                "https://www.facebook.com/buonaserarestaurant/?ref=page_internal",
            twitter: "#",
            instagram: "https://www.instagram.com/buonasera.restaurant/",
            tripadvisor:
                "https://www.tripadvisor.co.uk/Restaurant_Review-g186338-d1014303-Reviews-Buona_Sera-London_England.html",
            image1: "assets/images/venue_images/buona_sera/buona_sera_exterior.png",
            image1Alt: "Buona Sera exterior",
            image2: "assets/images/venue_images/buona_sera/buona_sera_eggs_bennedetto.png",
            image2Alt: "Eggs Bennedetto at Buona Sera",
            image3: "assets/images/venue_images/buona_sera/buona_sera_outside_dining.png",
            image3Alt: "Customers dining outside at Buona Sera",
            position: new google.maps.LatLng(
                51.460318082023775,
                -0.16687674600056668
            ),
            type: "restaurant",
        },
        // --------------------------------------------Pubs
        {
            // Balham Bowls Club
            name: "Balham Bowls Club",
            address: "7-9 Ramsden Rd, Balham, London, SW12 8QX",
            // Credit: text taken from https://balhambowlsclub.com/
            description:
                "Charming pub and restaurant set in an old bowling club with a large beer garden, two large function rooms for hire and a diverse programme of events.",
            website: "https://balhambowlsclub.com/",
            booking: "https://balhambowlsclub.com/",
            facebook:
                "https://www.facebook.com/pages/Balham%20Bowls%20Club/240883992993515/",
            twitter: "https://twitter.com/balhambowls?lang=en/",
            instagram: "https://www.instagram.com/balhambowls/?hl=en",
            tripadvisor:
                "https://www.tripadvisor.co.uk/Restaurant_Review-g186338-d3492324-Reviews-Balham_Bowls_Club-London_England.html",
            image1: "assets/images/venue_images/bottles.jpg",
            image1Alt: "Bottles on bar shelf",
            image2: "assets/images/venue_images/bottles.jpg",
            image2Alt: "",
            image3: "assets/images/venue_images/bottles.jpg",
            image3Alt: "",
            position: new google.maps.LatLng(
                51.445067652541034,
                -0.15250217267682872
            ),
            type: "pub",
        },
        {
            // The Camberwell Arms
            name: "The Camberwell Arms",
            address: "65 Camberwell Church St, Camberwell, London, SE5 8TR",
            // Credit: text taken from https://thecamberwellarms.co.uk/about/
            description:
                "The Camberwell Arms is a South London restaurant and bar, headed up by Chef Director, Michael Davies, who creates regularly changing menus based on seasonal and quality ingredients. Set within a public house, bars are also an integral part of what they do. The Camberwell Arms has two bars – downstairs you will find a traditional pub, a place to drop in for a drink and a snack, whilst the upstairs bar is open late for classic drinks and great music with a 2am license.",
            website: "https://thecamberwellarms.co.uk/",
            booking: "https://thecamberwellarms.co.uk/reservations/",
            facebook: "https://www.facebook.com/thecamberwellarms/",
            twitter: "https://twitter.com/camberwellarms",
            instagram: "https://www.instagram.com/thecamberwellarms/",
            tripadvisor:
                "https://www.tripadvisor.co.uk/Restaurant_Review-g186338-d7222373-Reviews-The_Camberwell_Arms-London_England.html",
            image1: "assets/images/venue_images/bottles.jpg",
            image1Alt: "Bottles on bar shelf",
            image2: "assets/images/venue_images/bottles.jpg",
            image2Alt: "",
            image3: "assets/images/venue_images/bottles.jpg",
            image3Alt: "",
            position: new google.maps.LatLng(
                51.47442936151898,
                -0.08844233069014149
            ),
            type: "pub",
        },
        {
            // The Faltering Fullback
            name: "The Faltering Fullback",
            address: "19 Perth Rd, Stroud Green, London, N4 3HB",
            // Credit: text taken from http://falteringfullback.com/
            description:
                "Hidden away on the leafy avenue of Perth Road, tucked behind Finsbury Park, you'll find this charming, well loved Irish pub. Grab a pint and your own corner in the amazing garden, in front of the big screen sports, or by the bar. Wile away your day contemplating the ceiling inspiration, challenge your brain in our hugely popular quiz, or party with pals till late on Fridays and Saturdays. With all the sports and eclectic, lively atmosphere, not to mention the wide choice of drinks.",
            website: "http://falteringfullback.com/",
            booking: "#",
            facebook:
                "https://www.facebook.com/pages/The%20Faltering%20Fullback/160854973929138/",
            twitter: "#",
            instagram: "https://www.instagram.com/thefalteringfullback/?hl=en",
            tripadvisor:
                "https://www.tripadvisor.co.uk/Restaurant_Review-g186338-d3515424-Reviews-The_Faltering_Fullback-London_England.html",
            image1: "assets/images/venue_images/bottles.jpg",
            image1Alt: "Bottles on bar shelf",
            image2: "assets/images/venue_images/bottles.jpg",
            image2Alt: "",
            image3: "assets/images/venue_images/bottles.jpg",
            image3Alt: "",
            position: new google.maps.LatLng(
                51.56868558992803,
                -0.10817859523605393
            ),
            type: "pub",
        },
        // --------------------------------------------Cocktail Bars
        {
            // Tola
            name: "Tola",
            address: "56 Peckham High St, Peckham, London, SE15 5DP",
            // Credit: text taken from https://www.tolapeckham.com/
            description:
                "Tola is a late night music venue, bar and roof terrace situated in the heart of Peckham.",
            website: "https://www.tolapeckham.com/",
            booking: "#",
            facebook: "https://www.facebook.com/tolapeckham/?_rdc=1&_rdr",
            twitter: "#",
            instagram: "https://www.instagram.com/tolapeckham/",
            tripadvisor: "#",
            image1: "assets/images/venue_images/bottles.jpg",
            image1Alt: "Bottles on bar shelf",
            image2: "assets/images/venue_images/bottles.jpg",
            image2Alt: "",
            image3: "assets/images/venue_images/bottles.jpg",
            image3Alt: "",
            position: new google.maps.LatLng(
                51.473367183358455,
                -0.07046348616823567
            ),
            type: "cocktail",
        },
        {
            // Callooh Callay
            name: "Callooh Callay",
            address: "65 Rivington St, Shoreditch, London, EC2A 3AY",
            description:
                "Low-lit Shoreditch bar with an interior themed on the works of Lewis Carroll, think Alice in Wonderland styling but actually executed well. There are two main bars: the main bar features relaxed lounge seating and if you delve a little deeper, you'll find a second bar 'hidden' behind a wardrobe door. You almost feel like you could be in wonderland after a few drinks! The well-curated menu features a wide range of weird and wonderful concoctions, alongside the more familiar fayre. This fun and lively bar is well woth a visit!",
            website: "https://www.calloohcallaybar.com/",
            booking: "https://www.calloohcallaybar.com/bookings/events/gifts",
            facebook: "https://www.facebook.com/CalloohCallayLondon",
            twitter: "https://twitter.com/callooh_callay?lang=en",
            instagram: "https://www.instagram.com/calloohcallaybar/?hl=en",
            tripadvisor:
                "https://www.tripadvisor.co.uk/Attraction_Review-g186338-d3385183-Reviews-Callooh_Callay_Bar-London_England.html",
            image1: "assets/images/venue_images/bottles.jpg",
            image1Alt: "Bottles on bar shelf",
            image2: "assets/images/venue_images/bottles.jpg",
            image2Alt: "",
            image3: "assets/images/venue_images/bottles.jpg",
            image3Alt: "",
            position: new google.maps.LatLng(
                51.5263352998997,
                -0.07990549598159494
            ),
            type: "cocktail",
        },
        // --------------------------------------------Street Food Markets
        {
            // Pop Brixton
            name: "Pop Brixton",
            address: "49 Brixton Station Rd, Brixton, London, SW9 8PQ",
            // Credit: text taken from https://www.popbrixton.org/
            description:
                "Pop Brixton is a temporary project that has turned disused land into a creative space for local, independent businesses. Come and discover South London’s most exciting start-ups working in food, retail, design and social enterprise.",
            website: "https://www.popbrixton.org/",
            facebook: "https://www.facebook.com/popbrixton/",
            booking: "#",
            twitter: "https://twitter.com/PopBrixton",
            instagram: "https://www.instagram.com/popbrixton/",
            tripadvisor:
                "https://www.tripadvisor.co.uk/Attraction_Review-g186338-d8441770-Reviews-Pop_Brixton-London_England.html",
            image1: "assets/images/venue_images/bottles.jpg",
            image1Alt: "Bottles on bar shelf",
            image2: "assets/images/venue_images/bottles.jpg",
            image2Alt: "",
            image3: "assets/images/venue_images/bottles.jpg",
            image3Alt: "",
            position: new google.maps.LatLng(
                51.46341404023569,
                -0.11228722008675468
            ),
            type: "street",
        },

        {
            // Peckham Levels
            name: "Peckham Levels",
            address:
                "F1-F6 Peckham Town Centre Carpark, 95A Rye Ln, London, SE15 4ST",
            // Credit: text taken from https://peckhamlevels.org/
            description:
                "There’s a whole host of things to do at Peckham Levels – from street food and bars, to a yoga studio and beauty salon.",
            website: "https://peckhamlevels.org/",
            booking: "#",
            facebook: "https://www.facebook.com/peckhamlevels/",
            twitter: "https://twitter.com/peckhamlevels/",
            instagram: "https://www.instagram.com/peckhamlevels/",
            tripadvisor: "#",
            image1: "assets/images/venue_images/bottles.jpg",
            image1Alt: "Bottles on bar shelf",
            image2: "assets/images/venue_images/bottles.jpg",
            image2Alt: "",
            image3: "assets/images/venue_images/bottles.jpg",
            image3Alt: "",
            position: new google.maps.LatLng(
                51.471557276187816,
                -0.06720426931757024
            ),
            type: "street",
        },
        // --------------------------------------------Breweries
        {
            // Mondo Brewery
            name: "Mondo Brewing Company",
            address: "86 Stewart's Rd, Nine Elms, London, SW8 4UG",
            // Credit: text taken from https://mondobeer.com/
            description:
                "Mondo Brewing is an independent brewery grounded in London, founded in 2014 by two Americans. A stone’s throw away from the iconic Battersea Power Station, their brewery and tap house are nestled just a few hundred yards south of there, waiting to be discovered by thirsty patrons.",
            website: "https://mondobeer.com/",
            booking: "#",
            facebook: "https://www.facebook.com/mondobrewing/",
            twitter: "https://twitter.com/mondobrewing",
            instagram: "https://www.instagram.com/mondobrewing/",
            tripadvisor: "#",
            image1: "assets/images/venue_images/bottles.jpg",
            image1Alt: "Bottles on bar shelf",
            image2: "assets/images/venue_images/bottles.jpg",
            image2Alt: "",
            image3: "assets/images/venue_images/bottles.jpg",
            image3Alt: "",
            position: new google.maps.LatLng(
                51.47515303781801,
                -0.14036621534394356
            ),
            type: "brewery",
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
            <span class="sr-only">Website</span>Visit ${venue.name} Website <i class="fas fa-external-link-alt"></i></a>`;
            // Booking
            if (venue.booking === "#") {
                // Check to see if the venue.booking value is "#"
                venueBooking.classList.add("d-none"); // If it is use the Bootstrap class "d-none" to hide the icon/link
            } else {
                venueBooking.classList.remove("d-none"); // If venue.facebook has a value other than "#", remove the Bootstrap class "d-none" to show the icon/link
                venueBooking.innerHTML = `<a href="${venue.booking}" target="_blank" rel="noopener">
            <span class="sr-only">Booking</span>Reserve a table at ${venue.name} <i class="fas fa-external-link-alt"></i></a>`;; // generates the icon and link to be displayed in the DOM
            }
            // Facebook
            if (venue.facebook === "#") {
                // Check to see if the venue.favebook value is "#"
                venueFacebook.classList.add("d-none"); // If it is use the Bootstrap class "d-none" to hide the icon/link
            } else {
                venueFacebook.classList.remove("d-none"); // If venue.facebook has a value other than "#", remove the Bootstrap class "d-none" to show the icon/link
                venueFacebook.innerHTML = `<a href="${venue.facebook}" target="_blank" rel="noopener"> 
        <i class="fab fa-facebook-f" aria-hidden="true"></i>
        <span class="sr-only">Facebook</span>`; // generates the icon and link to be displayed in the DOM
            }
            // Twitter
            if (venue.twitter === "#") {
                // Check to see if the venue.twitter value is "#"
                venueTwitter.classList.add("d-none"); // If it is use the Bootstrap class "d-none" to hide the icon/link
            } else {
                venueTwitter.classList.remove("d-none"); // If venue.twitter has a value other than "#", remove the Bootstrap class "d-none" to show the icon/link
                venueTwitter.innerHTML = `<a href="${venue.twitter}" target="_blank" rel="noopener"> 
            <i class="fab fa-twitter" aria-hidden="true"></i>
            <span class="sr-only">Twitter</span>`; // generates the icon and link to be displayed in the DOM
            }
            // Instagram
            if (venue.instagram === "#") {
                // Check to see if the venue.instagram value is "#"
                venue.classList.add("d-none"); // If it is use the Bootstrap class "d-none" to hide the icon/link
            } else {
                venueInstagram.classList.remove("d-none"); // If venue.instagram has a value other than "#", remove the Bootstrap class "d-none" to show the icon/link
                venueInstagram.innerHTML = `<a href="${venue.instagram}" target="_blank" rel="noopener"> 
            <i class="fab fa-instagram" aria-hidden="true"></i>
            <span class="sr-only">Instagram</span>`; // generates the icon and link to be displayed in the DOM
            }
            //Trip Advisor
            if (venue.tripadvisor === "#") {
                // Check to see if the venue.tripadvisor value is "#"
                venue.classList.add("d-none"); // If it is use the Bootstrap class "d-none" to hide the icon/link
            } else {
                venueTripadvisor.classList.remove("d-none"); // If venue.tripadvisor has a value other than "#", remove the Bootstrap class "d-none" to show the icon/link
                venueTripadvisor.innerHTML = `<a href="${venue.tripadvisor}" target="_blank" rel="noopener"> 
            <i class="fab fa-tripadvisor" aria-hidden="true"></i>
            <span class="sr-only">Trip Advisor</span>`; // generates the icon and link to be displayed in the DOM
            }
            // heroImage.innerHTML = `<div class="d-none"></div>`
            heroImage.classList.add("d-none");
            // Venue Image 1
            venueImage1.innerHTML = `<img src="${venue.image1}" alt="${venue.image1Alt}" width="100" height="100">`;
            venueImage1.style = "border: 5px solid #063367;";
            // Venue Image 2
            venueImage2.innerHTML = `<img src="${venue.image2}" alt="${venue.image2Alt}" width="100" height="100">`;
            venueImage2.style = "border: 5px solid #063367;";
            // Venue Image 3
            venueImage3.innerHTML = `<img src="${venue.image3}" alt="${venue.image3Alt}" width="100" height="100">`;
            venueImage3.style = "border: 5px solid #063367;";
            
        });

        // Credit: code modified from https://stackoverflow.com/questions/17775270/google-maps-zoom-in-on-marker-with-one-click-multiple-markers
        // Event listener to zoom and center map on marker double click
        marker.addListener("dblclick", () => {
            map.setZoom(15);
            map.setCenter(marker.getPosition());
        });

        // Credit: code modified from https://developers.google.com/maps/documentation/javascript/infowindows
        // Info window for each marker to display venue name
        const infowindow = new google.maps.InfoWindow({
            content: venue.name,
        });

        // display infowindow containing venue name for each marker on mouse-over
        marker.addListener("mouseover", function () {
            infowindow.open(map, this);
        });

        // hide infowindow containing venue name for each marker on mouse-out
        marker.addListener("mouseout", function () {
            infowindow.close();
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

    // ------------------------------------Google Places API
    // Credit: code modified from https://developers.google.com/maps/documentation/javascript/examples/places-searchbox#maps_places_searchbox-javascript

    // Create the search box and link it to the UI element.
    const input = document.getElementById("pac-input");
    const searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);
    // Bias the SearchBox results towards current map's viewport.
    map.addListener("bounds_changed", () => {
        searchBox.setBounds(map.getBounds());
    });

    let placeMarkers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }
        // Clear out the old markers on new user search
        placeMarkers.forEach((marker) => {
            marker.setMap(null);
        });
        placeMarkers = [];
        // For each place, get the icon, name and location
        const bounds = new google.maps.LatLngBounds();
        places.forEach((place) => {
            if (!place.geometry || !place.geometry.location) {
                console.log("Returned place contains no geometry");
                return;
            }
            const icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25),
            };
            // Create a marker for each place
            placeMarkers.push(
                new google.maps.Marker({
                    map,
                    icon,
                    title: place.name,
                    position: place.geometry.location,
                })
            );

            if (place.geometry.viewport) {
                // Only geocodes have viewport
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });
} // initMap END --------------------------------
