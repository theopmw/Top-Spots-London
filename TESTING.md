## Bugs

### Pushing the venues into separate arrays sorted by type:

Below is the inital code to loop over the venue array and generate a marker for each one:

```
    // Loop over the venues array of objects
    for (let i = 0; i < venues.length; i++) {
        const marker = new google.maps.Marker({
            position: venues[i].position,
            icon: icons[venues[i].type].icon,
            map: map,
        });
    };
```
In order to push each venue marker into a separate array based on the type of venue (as below) this code had to be refactored.

```
// Empty marker arrays by venue type (Filled by markerToArray function)
let restaurantMarkers = [];
let pubMarkers = [];
let cocktailBarMarkers = [];
let streetMarkers = [];
let breweryMarkers = [];
let distilleryMarkers = [];
```
To do this, the markerToArray function was written which takes an item (venue) and an array name as arguments. Inside, it takes the venue, generates a marker, and pushes it into the array passed in. 
Outside the function, a for-loop was written to iterate over the venues array and for each venue, depending on the type, the markerToArray function is called, with the venue and the specific array passed as arguments.

```
// markerToArray function to take any venue, make a maker and push it into the specific array
    function markerToArray(venue, arrayName) {
        const marker = new google.maps.Marker({
            position: venue.position,
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

```

#### Refactoring code used for the map checkbox event listener

In the code to show and hide each venue type marker, code was simplified from:

```
    let pubCheckbox = document.querySelector("input[id=pub-checkbox]");
    pubCheckbox.addEventListener('change', function () {
    if (this.checked) {
            // Shows any markers currently in the array
            function showMarkers() {
                pubSetMapOnAll(map);
            }
            showMarkers();
        } else {
            // Hides any markers currently in the array
            function clearMarkers() {
                pubSetMapOnAll(null);
            }
            clearMarkers();
        }

```
    To:

```
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
```

This was done in order to avoid defining a function to just immediately call it, defining the outer function was not neccesarry to gain the functionality required amd was just wasted code.