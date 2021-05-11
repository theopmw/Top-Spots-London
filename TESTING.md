## Bugs

### Map search box not working correctly and breaking map functionality

Expected:  
When using the map search box, a list of predicted searches should appear in the dropdown, allowing the user to either finish their own search or select one of the options from the dropdown. A marker should then be created for that place and the map should zoom in on that location.

Testing:  
The feature was tested by loading the page, typing something into the search box to see if predictions loaded in the dropdown, and then trying to add a marker to that location.

Result:  
Having followed the instructions listed in the Google documentation [here](https://developers.google.com/maps/documentation/javascript/examples/places-searchbox#maps_places_searchbox-javascript) and [here](https://developers.google.com/maps/documentation/javascript/examples/places-searchbox#maps_places_searchbox-html), this feature did not always work. On some occasions the map would not even load on page load. On others, the map and search bar would load but the dropdown would not appear when the user starts to type a location. On other occasions the map loads and the search bar works as expected, providing suggested locations in the dropdown and adding a marker to that location when selected.

The following errors were listed in the Chrome Developer Tools Console:

![Screenshot showing console before fix](https://i.ibb.co/vZqpxLW/Screenshot-2021-04-27-at-15-01-42.png)


Fix:  
To fix this, the Google Placeslaces script had to be removed and the script for the map at the end of the HTML body had to be modified from:
``` 
<script 
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD34uhPBsPD7JorzkINLXHnLaGexxT8Us8">
/script>
```

To:

```
<script 
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD34uhPBsPD7JorzkINLXHnLaGexxT8Us8&libraries=places&v=weekly">
</script>
```

This meant the Google Map, Google Places API and Places Library loaded correctly and the map and search box worked as they should.

Screen shot of Chrome Developer Tools Console after fix:

![Screenshot showing console after fix](https://i.ibb.co/DYr9rCk/Screenshot-2021-04-27-at-15-18-46.png)

### Map not loading on every page load

Expected:  
Google Maps API to load correctly on every page load.

Testing:  
Reload and hard reload the page to test if the map loads correctly every time.

Results:   
On some page loads the map failed to load, below is a screenshot of the site preview and console:

![Screenshot showing site preview and error message](https://i.ibb.co/47Sqfxv/Screenshot-2021-04-11-at-07-52-39.png)

Fix:  
To fix this, the callback ("&callback=initMap") was removed from the original ```<script>``` for Google Maps in the index.html file:

Before:
```
 <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD34uhPBsPD7JorzkINLXHnLaGexxT8Us8&callback=initMap"></script>
```
After:
```
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD34uhPBsPD7JorzkINLXHnLaGexxT8Us8"></script>
```

Then the initMap function had to be called mannually in the maps.js file:
```
initMap(); // This line was inserted to call the initMap function
function initMap() {
    // Function code
};
```
This solved the issue and meant the map loaded reliably on every page load, the callback was performed manually in the maps.js file, rather than in the Google Maps ```<script>```

### Venue image borders not displaying correctly

Expected:  
When a venue map marker is clicked, the venue images display correctly, with a solid, navy blue, 5px border with 10px border radius.

Testing:   
Load the page and click a venue map marker to load the venue information. Check whether the images load correctly with the border as expected.

Results:   
When the venue information is loaded, only the firast venue image is displayed as expected, the other 2 images display with the border behind them and not fitting the image:

![Venue Images Bug](assets/images/testingscreenshots/venue_images_testing_bug.png)

Fix:   
The code that produced the above bug used the Bootstrap ```d-none``` class to hide the 2nd and 3rd images on small screen sizes. In order to fix this, these classes were removed and the ```display: none``` property was added to the style.css file as a media query.

Snippet of original code using Bootstrap ```d-none``` class to hide images from the index.html file:

``` 
<div class="container-fluid">
    <div class="row">
        <div id="venue-images" class="col list-inline">
            <div id="image1" class="list-inline-item"></div>
            <div id="image2" class="list-inline-item d-none d-md-inline"></div>
            <div id="image3" class="list-inline-item d-none d-md-inline"></div>
        </div> 
    </div>
</div>
```

The Bootstrap classes were then removed from ```image2``` and ```image3```:

``` 
<div class="container-fluid">
    <div class="row">
        <div id="venue-images" class="col list-inline">
            <div id="image1" class="list-inline-item"></div>
            <div id="image2" class="list-inline-item"></div>
            <div id="image3" class="list-inline-item"></div>
        </div> 
    </div>
</div>
```

And ```display: none``` was added in the style.css file:

```
@media screen and (max-width: 576px) {
    #image2,
    #image3 {
        display: none;
    }
}

```
This fixed the issue and the outcome was as expected:

![Venue Images Fix](assets/images/testingscreenshots/venue_images_testing_fix.png)

### Venue image borders displaying on page load

Expected:   
Image borders only display after a map marker has been clicked.

Testing:   
Load the page and check whether the borders display on page load, below the welcome message.

Results:    
The borders were visible as navy blue dots underneath the welcome message:

![Venue Image Border Bug](assets/images/testingscreenshots/venue_image_border_bug.png)

Fix:
The border was removed from the style.css file and added to the venue images in the maps.js file, to load after the venue marker is clicked:

Code snippet from maps.js once border styles were added to venue images:

```
            // Venue Image 1
            venueImage1.innerHTML = `<img src="${venue.image1}" alt="${venue.image1Alt}" width="100" height="100">`;
            venueImage1.style = "border: 5px solid #063367;";
            // Venue Image 2
            venueImage2.innerHTML = `<img src="${venue.image2}" alt="${venue.image2Alt}" width="100" height="100">`;
            venueImage2.style = "border: 5px solid #063367;";
            // Venue Image 3
            venueImage3.innerHTML = `<img src="${venue.image3}" alt="${venue.image3Alt}" width="100" height="100">`;
            venueImage3.style = "border: 5px solid #063367;";
```

Screenshot:

![Venue Image Border Fix](assets/images/testingscreenshots/venue_image_border_fix.png)

### Map search box loading outside the map on page load then popping in:

Expected:   
The map search box loads in the correct position, within the map, on page load.

Testing:   
Load the page and check whether the search box loads inside the map.

Result:   
The search box loads outside the map, then pops inside it to the correct position.

Screenshot of bug:
![Map Search Box Bug](assets/images/testingscreenshots/map_search_bar_bug.png)

Fix:   
A page loader was added while the full site loads and add a 1 second ```setTimeout``` to ensure the page had enough time to load before the page loader fades out. The ```initMap()``` function was then moved above the ```setTimeout``` and ```fadeOut```.

Code snippet for page loader:
```
$(window).on("load", function () {
    initMap();
    setTimeout(() => {
        $("#container-loader").fadeOut();
    }, 1000);
});
```

Screenshot of page loader fix:
![Map Search Box Page Loader Fix](assets/images/testingscreenshots/map_search_bar_fix_1.png)

Screenshot of map after page loader fadeout:
![Map Search Box Page Loader Fix](assets/images/testingscreenshots/map_search_bar_fix_2.png)

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



## Testing 

### Google Lighthouse Testing

