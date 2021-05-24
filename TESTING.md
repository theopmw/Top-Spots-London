# Testing

![Am I Responsive](assets/images/testing_screenshots/am_i_responsive/am_i_responsive_home.png)

View the live Top Spots London site [here](https://theopmw.github.io/Top-Spots-London/).

- [Testing](#testing)
  * [User Stories](#user-stories)
    + [First Time User Goals](#first-time-user-goals)
    + [Returning User Goals](#returning-user-goals)
    + [Frequent User Goals](#frequent-user-goals)
  * [Manual Testing](#manual-testing)
    + [Page load (Preloader):](#page-load--preloader--)
    + [Header/Navigation Bar:](#header-navigation-bar-)
    + [Home Page (On Page Load):](#home-page--on-page-load--)
    + [Home Page (Interactive Elements):](#home-page--interactive-elements--)
      - [Map markers and venue information:](#map-markers-and-venue-information-)
      - [Legend](#legend)
    + [Contact Page](#contact-page)
    + [Footer](#footer)
    + [Responsive design](#responsive-design)
      - [Mobile devices:](#mobile-devices-)
      - [Tablet Devices:](#tablet-devices-)
      - [Desktop Devices:](#desktop-devices-)
  * [Automated Testing](#automated-testing)
    + [W3C Markup Validation (HTML)](#w3c-markup-validation--html-)
    + [W3C CSS Validation Service (CSS)](#w3c-css-validation-service--css-)
    + [JSHint (JavaScript)](#jshint--javascript-)
    + [Google Lighthouse Testing](#google-lighthouse-testing)
  * [Bugs](#bugs)
    + [Map search box not working correctly and breaking map functionality](#map-search-box-not-working-correctly-and-breaking-map-functionality)
    + [Map not loading on every page load](#map-not-loading-on-every-page-load)
    + [Venue image borders not displaying correctly](#venue-image-borders-not-displaying-correctly)
    + [Venue image borders displaying on page load](#venue-image-borders-displaying-on-page-load)
    + [Map search box loading outside the map on page load then popping in:](#map-search-box-loading-outside-the-map-on-page-load-then-popping-in-)
    + [Venues with tripadvisor value "#" not displaying the set of 3 venue images correctly](#venues-with-tripadvisor-value-----not-displaying-the-set-of-3-venue-images-correctly)
    + [Pushing the venues into separate arrays sorted by type:](#pushing-the-venues-into-separate-arrays-sorted-by-type-)
      - [Refactoring code used for the map checkbox event listener](#refactoring-code-used-for-the-map-checkbox-event-listener)
  * [Known Bugs and Issues](#known-bugs-and-issues)
    + [Map Positioning](#map-positioning)
    + [Console Violation - non-passive event listener](#console-violation---non-passive-event-listener)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>


## User Stories
---
The user stories are annotated below to describe funtionality and highlight the way in which the project fulfills the objectives set out. Relevant screenshots relating to each of the user stories below can be found in the main [README.md](https://github.com/theopmw/Top-Spots-London/blob/master/README.md) file.

### First Time User Goals

* As a first time user, I want to easily understand the purpose of the site.
    * The Information Box on the landing page provides a brief explanation of the site.
    * The Information Box is clearly visible as soon as the user lands on the page on all devices.
* As a first time user, I want to easily understand how to use the site.
     * The information box on the landing page prompts the user to interact with the map to start exploring.
     * The Information Box is clearly visible as soon as the user lands on the page on all devices.
* As a first time user, I want to easily understand how to navigate the site in order to find what I need efficiently.
    * The use of the site is intuitive and the brief information given in the Information Box provodes all the information needed to use the site.
    * The navigation bar situated in the header, beneath the site logo is clear, intuitive and easy to understand.
* As a first time user, I want to be able to easily interact with the map to find out information about a venue.
    * When as a user clicks a marker, the info box is launched providing information about the chosen venue.
    * When a user clicks another marker, the previous venue information is replaced by the information on the new venue.

### Returning User Goals

* As a returning user, I want to easily find new places I would like to visit.
    * The Information Box will be updated with brief information on additions when published.
* As a returning user, I would like to be able to make contact with any questions or comments I have.
    * The Contact Page is easily accessible via the navigation bar and diplays a clear and intuitve contact form. This allows users to contact the site with any questions or comments they may have.
    * On successful form submission a modal is triggered confirming the form has been sucessfuly received.
    * If an error has occured, a separate modal is triggered to inform the user and advise them to try agan at a later date.
* As a returning user, I would like to find out information about a venue. Its name, where it is and some information about it.
    * For each venue, the Information box clearly displays the venue name, address and a brief description of the venue.
* As a returning user, I would like the ability to easily find a link to a venues website to find out more information and allow me to make a booking.
    * For each venue, the Information Box clearly displays a link to the website of that venue, under the venue information.
    * For each venue, the Information Box displays a direct link to the book a table at that venue. If the venue does not accept bookings, this element is hidden to improve the UX and avoid displaying misleading information.
* As a returning user, I would like the abilty to easily find links to a venues social media channels.
    * For each venue, the Information Box displays a direct link to each of the venues social media channels (in the form of a Font Awesome icon). If the venue does not subscribe to one or more of the social media platforms, the icon is hidden to improve the UX and avoid displaying misleading information.
* As a returning user, I would like the ability to easily find a link to a venues Trip Advisor so I can see their scores and reviews.
    * For each venue, the Information Box displays a direct link to the venues Trip Advisor page (in the form of a Font Awesome icon). If the venue is not on Trip Advisor, the icon is hidden to improve the UX and avoid displaying misleading information.
* As a returning user, I would like to see images of the venues.
    * Each venue has a set of 3 images to give a feel of the venue. This drops to 1 image on mobile devices to provide a clean, positive UX.
* As a returning user, I would like the ability to filter venues on the map by type.
    * The map legend is dynanmic and allows users to show or hide venue markers by type or hide all markers entirely.


### Frequent User Goals

* As a frequent user, I would like the ability to recommend venues that I have discovered that I would like to see added to the site.
    * Users can reccomend places they would like to see added to the site via the contact form on the contact page.
    * On successful form submission a modal is triggered confirming the form has been sucessfuly received.
    * If an error has occured, a separate modal is triggered to inform the user and advise them to try agan at a later date.
* As a frequent user, I would like to be able to search for new destinations that are not featured using the interactive map and find out where they are.
    * The search bar at the top of the map allows users to search for locations and add a temporary marker to the map.

## Manual Testing
---

### Page load (Preloader):
* Load the page and confirm that the preloader is displayed and fades out after 1000ms to show the main site.
* Confirm that the main site has fully loaded on preloader fadeout.
* Review and confirm responsiveness and functionality on different browsers.
* Review and confirm responsiveness and functionality on tablet and mobile devices.

### Header/Navigation Bar:
* From the Home Page, click the "Contact" navigation menu item to confirm it links to the Contact Page.
* From the Contact Page, click the "Home" navigation menu item to confirm it links to the Home Page.
* Review and confirm responsiveness and functionality on different browsers.
* Review and confirm responsiveness and functionality on tablet and mobile devices.

### Home Page (On Page Load):
* Confirm Google Map API loads correctly.
* Confirm custom map markers load correctly.
* Confirm welcome message loads correctly.
* Confirm hero image loads correctly.
* Confirm legend loads correctly. 
* Review and confirm responsiveness and functionality on different browsers.
* Review and confirm responsiveness and functionality on tablet and mobile devices.

### Home Page (Interactive Elements):
#### Map markers and venue information:
* Scroll over each marker to confirm that an info window with the venue name is displayed.
* Click each marker on the map to confirm the correct venue is displayed in the Information Box.
* For each venue confirm the following:
    * The correct venue name is displayed.
    * The correct venue address is displayed.
    * The correct venue description is displayed.
    * The correct venue name is displayed in the "Visit (venue name) website" link.
    * The "Visit (venue name) website" link directs to the correct website and opens in a new tab.
    * The correct venue name is displayed in the "Book a table at (venue name)" link
    * The "Book a table at (venue name)" link directs to the correct website and opens in a new tab.
    * If the venue does not accept bookings, the "Book a table at (venue name)" link is hidden.
    * The correct social media/trip advisor links are displayed (if a venue doesn't have one of the profiles, the icon is hidden).
    * The social media/trip advisor links direct to the correct page and open in a new tab.
    * The correct venue images display and have unique and appropriate alt attributes to display if the images don't load correctly.
* Confirm that all venue information loads correctly every time a different marker is clicked.
* Double click each marker to confirm zoom functionality works as expected.
* Enter text into the search bar to confirm search suggestions are presented under the bar.
* Complete a search or select a sugestion from the dropdown to confirm the map zooms in on the location and a marker is placed.
* Review and confirm responsiveness and functionality on different browsers.
* Review and confirm responsiveness and functionality on tablet and mobile devices.

#### Legend
* Click each checkbox in the legend to confirm that the show/hide functionality is working correctly and shows/hides the correct map markers.
* Review and confirm responsiveness and functionality on different browsers.
* Review and confirm responsiveness and functionality on tablet and mobile devices.

### Contact Page
* Navigate to the Contact Page using the navigation bar.
* Fill out the form and click send.
* Confirm email is sent to the correct address and the contents of the message are as expected.
* Hover over the "Send" button to confirm colour transition is correct.
* With the form inputs completely clear of information, click the send button to confirm The "Please fill in this field" alert box is displayed under the "Name" input.
* With the form name input filled in, click the send button to confirm The "Please fill in this field" alert box is displayed under the "Email address" input.
* With the form name and email input filled in, click the send button to confirm The "Please fill in this field" alert box is displayed under the "Message" input.
* Confrim the correct modal is launched on form submission and the form is reset.
* Review and confirm responsiveness and functionality on different browsers.
* Review and confirm responsiveness and functionality on tablet and mobile devices.

### Footer
* Confirm copyright text is displayed as expected.
* Confirm social links direct you to the home page of the relevant platform (as Top Spots London is for educational purposes only, it does not have social media).
* Review and confirm responsiveness and functionality on different browsers.
* Review and confirm responsiveness and functionality on tablet and mobile devices.

### Responsive design
* Reduce the screen size to confirm that all elements behave as expected and display as they should on all device sizes.
* Ensure that all elements have adequate space and the site is still easily legible and easy to use.

#### Mobile devices:
* Home Page:
    * Confirm that the page content stacks vertically, with the Welcome Message/Information Box at the top, followed by the hero image, map and legend, and all page elements have enough space.

* Contact Page:
    * Confirm that the contact form width increases to take up a larger portion of the screen (90%) to allow the user to fill in the fields easily.

#### Tablet Devices:
* Home page:
    * Confirm that the Welcome Message/Information Box stacks to the top of the page at full width, with hero image beneath and the map and legend beneath that. (the map taking up the left 2/3 of the screen and the legend the right 1/3).
* Contact Page:
    * Confirm that the contact from takes up the correct portion of the screen (66%) and is easy to read and fill out.

#### Desktop Devices:
* Home Page:
    * Confirm that the Map takes up the left 1/3 of the screen, with the welcome message, hero image and legend stacked on the right 2/3.
* Contact Page:
    * Confirm that the contact from takes up the correct portion of the screen (66%) and is easy to read and fill out.

## Automated Testing
---

The following automated tools were used to test the project code throughout the development process:

### W3C Markup Validation (HTML)

Home page:

* [W3C Markup Validation Service](https://validator.w3.org/) highlighted the following 3 warnings when the index.html file was tested:

![W3C Validation Warnings](assets/images/testing_screenshots/w3c_html_validation.png)

* Below are the methods implemented to fix the issues: 

    1. To resolve this warning, 2 empty columns were added on the table row in question.

    2. To resolve this warning, 2 empty columns were added on the table row in question.

    3. To resolve this warning, the semantic section tags was replaced with non-sematic div tags as a heading was not required. 

Contact page:

* No errors or warnings were found when the conatct.html file was tested.

### W3C CSS Validation Service (CSS)

* No errors or warnings were found when the styles.css file was tested using the [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/).

### JSHint (JavaScript)

[JSHint](https://jshint.com/) was used to test all JavaScript files.

maps.js:

* No errors or warnings found in the maps.js file other than "One undefined variable" relating to the use of "google" throughout the file:

![JSHint maps.js Errors](assets/images/testing_screenshots/maps.js_jshint_testing.png)

* This could not be avoided as it points to the google variable used throughout the file in order to make the Google Maps API work.

sendEmail.js:

* No errors or warnings found in the sendEmail.js file other than:

![JSHint sendEmail.js Errors](assets/images/testing_screenshots/sendEmail.js_jshint_testing.png)

* This could not be avoided as both "emailjs" and "sendMail" are required for [EmailJS](https://www.emailjs.com/) to work.

### Google Lighthouse Testing
    
## Bugs
---

### Map search box not working correctly and breaking map functionality

Expected:  
When using the map search box, a list of predicted searches should appear in the dropdown, allowing the user to either finish their own search or select one of the options from the dropdown. A marker should then be created for that place and the map should zoom in on that location.

Testing:  
The feature was tested by loading the page, typing something into the search box to see if predictions loaded in the dropdown, and then trying to add a marker to that location.

Result:  
Having followed the instructions listed in the Google documentation [here](https://developers.google.com/maps/documentation/javascript/examples/places-searchbox#maps_places_searchbox-javascript) and [here](https://developers.google.com/maps/documentation/javascript/examples/places-searchbox#maps_places_searchbox-html), this feature did not always work. On some occasions the map would not even load on page load. On others, the map and search bar would load but the dropdown would not appear when the user starts to type a location. On other occasions the map loads and the search bar works as expected, providing suggested locations in the dropdown and adding a marker to that location when selected.

The following errors were listed in the Chrome Developer Tools Console:

![Screenshot showing console before fix](assets/images/testing_screenshots/map_search_bug.png)


Fix:  
To fix this, the Google Places script had to be removed and the script for the map at the end of the HTML body had to be modified from:
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

![Screenshot showing console after fix](assets/images/testing_screenshots/map_search_fix.png)

(Violations shown above are addressed in Known Bugs and Issues section)

### Map not loading on every page load

Expected:  
Google Maps API to load correctly on every page load.

Testing:  
Reload and hard reload the page to test if the map loads correctly every time.

Results:   
On some page loads the map failed to load, below is a screenshot of the site preview and console:

![Screenshot showing site preview and error message](assets/images/testing_screenshots/map_not_loading_bug.png)

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

![Venue Images Bug](assets/images/testing_screenshots/venue_images_testing_bug.png)

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

![Venue Images Fix](assets/images/testing_screenshots/venue_images_testing_fix.png)

### Venue image borders displaying on page load

Expected:   
Image borders only display after a map marker has been clicked.

Testing:   
Load the page and check whether the borders display on page load, below the welcome message.

Results:    
The borders were visible as navy blue dots underneath the welcome message:

![Venue Image Border Bug](assets/images/testing_screenshots/venue_image_border_bug.png)

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

![Venue Image Border Fix](assets/images/testing_screenshots/venue_image_border_fix.png)

### Map search box loading outside the map on page load then popping in:

Expected:   
The map search box loads in the correct position, within the map, on page load.

Testing:   
Load the page and check whether the search box loads inside the map.

Result:   
The search box loads outside the map, then pops inside it to the correct position.

Screenshot of bug:
![Map Search Box Bug](assets/images/testing_screenshots/map_search_bar_bug.png)

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
![Map Search Box Page Loader Fix](assets/images/testing_screenshots/map_search_bar_fix_1.png)

Screenshot of map after page loader fadeout:
![Map Search Box Page Loader Fix](assets/images/testing_screenshots/map_search_bar_fix_2.png)

### Venues with tripadvisor value "#" not displaying the set of 3 venue images correctly

Expected:   
When a venue marker is clicked, 3 venue images are dispayed (only one on mobile devices).

Testing:   
Click all venue markers and check that they all show the correct set of images as assigned to them.

Result:   
On venues with a tripadvisor value of "#", the images don't load correctly (they images of the previous marker clicked remain).

On those venues the following is dispalyed in the console:
![Venue Images not Displaying Console](assets/images/testing_screenshots/venue_image_display_console.png)

And a screenshot of the site preview showing the wrong images:
![Venue Images not Displaying Bug](assets/images/testing_screenshots/venue_image_display_bug.png)

Fix:   
The bug was being caused by the Bootstrap d-none class being applied to the wrong element.

Here is the code that caused the bug:
```
venue.classList.add("d-none"); 
```
The class had to be added to venueTripadvisor, not the venue, so by changing the code to the below, the bug was fixed:
```
venueTripadvisor.classList.add("d-none");
```
Here is a screenshot of the fixed result:
![Venue Images not Displaying Fix](assets/images/testing_screenshots/venue_image_display_fix.png)


### Pushing the venues into separate arrays sorted by type:

Expected:   
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


In order to push each venue marker into a separate array based on the type of venue to allow for the legend checkboxes to show and hide venues by type (as below) this code had to be refactored.

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

This was done in order to avoid defining a function to just immediately call it, defining the outer function was not neccesary to gain the functionality required and was just wasted code.

## Known Bugs and Issues
---

### Map Positioning

On smaller desktop devices and when the window is reduced vertically, there is white space under the map container:

![Map Height Bug](assets/images/testing_screenshots/map_height_bug.png)

This is caused by the ```container-map``` element having a height setting of ```height: calc(100vh - 190px)``` to sit between the header (130px)  and the footer (80px). So if the footer is not visible in the viewport, the map is pushed up as it must retain its vh value.

In order to fix this, the index.html code must be refactored. The current code uses Bootstrap float classes to float the map right and the Information Box (Welcome message, Hero image, Legend on landing page and Venue information and Legend on all venue pages) left.

In order to fix this problem, either Bootstrap nested rows or CSS Grid (with the help of Flexbox) will be implemented.

Due to time constraints this feature has been unable to be implemented but will be written in in future updates to improve the site responsiveness and UX. It will also allow for improved potential scalability of the site if it should grow in size and complexity in the future.


### Console Violation - non-passive event listener

The Top Spots London Home page shows the following violations on my system:

![Non-Passive Event Listener Violation](assets/images/testing_screenshots/non-passive_event_listener_violation.png)

Having tested the site on multiple other computers, it has become apparent that these violations are only local to my system. Due to time constraints I have been unable to investigate this fully and rectify the issue but this will be actioned in the future.