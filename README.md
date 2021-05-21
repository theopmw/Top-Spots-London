
![Top Spots London Logo](assets/images/logo/top_spots_london_logo.png)

[Table of contents generated with markdown-toc](http://ecotrust-canada.github.io/markdown-toc/)

# Top Spots London

Top Spots London showcases some of the most exciting food and drink destinations across the capital. It has been designed to allow the user to interact with the site on several levels to really explore the food and drink scene in London and discover a wide range of exciting and unique places to visit.

## Site Goals
---

The aim of the site is to provide users with a curated list of the best places to eat and drink in London. The main goal is to provide users with ideas and inspiration on where to go out in London and to encourage them to try new places.

The site provides the user with the followiing information for each of the venues listed:

* Venue Name
* Venue Address
* Venue Description
* Link to venue website
* Link to venue booking/reservations page
* Links to the venues social media accounts and Trip Advisor page

The site has been designed to be accessible and respoinsive on a range of devices to allow users to search for recommended destinations from wherever they are.

Through the contact page, users are encouraged to provide feeback on the site and reccommend venues they would like to see added to the site.

<!-- The site has also been designed to allow the user to filter by type of venue so they can quickly and efficiently search for the type of experience they seek: restaurants, pubs, streetfood markets, breweries/tap rooms or distilleries. -->

If the site is perceived as successful, it is anticipated that the site could be expanded to include the following features:

* Add a way for users to save or mark the venues they like
* Add weekly/monthly round-ups of venues, for example "Best venues to visit this week"/"This months Top Spots"
* Add a way for users to browse venues in list format, rather than using the interactive map
* Add a way for users to search or filter venues by area
* Add details of any special events or promotions happening at a venue
* Add a way for users to add comments on the venues - could be implemented at the bottom of each venues information page
* Add an integrated directions API, for example Google Directions or Citymapper


Mention something about the range of culinary experiences available in London and how diverse the London food/drink scene is? Explosion of streetfood over the last 10-15 years?

Something about having an easily accessible, well curated list of London food/drink destinations?

## UX
---

### Ideal User

#### The ideal user for this site:

* Lives in London, is planing a visit to London or is currently visiting London.
* Has an interest in eating out and visiting interesting venues that provide food and/or drinks.
* Has disposable income.

#### Visitors to this site are searching for:

* Inspiration for food and drink destinations to visit in London.

### User Stories

* First time user goals:

    1. As a first time user, I want to easily understand the purpose of the site.
    2. As a first time user, I want to easily understand how to use the site.
    3. As a first time user, I want to easily understand how to navigate the site in order to find what I need efficiently.

* Returning user goals:

    1. As a returning user, I want to easily find new places I would like to visit.
    2. As a returning user, I want to be able to filter places by area and or category in order to easily find what I am looking for.
    3. As a returning user, I would like to be able to make contact with any questions or comments I have.
    4. As a returning user, I would like to be able to find out more about the site and its goals.
    5. As a returning user, I would like the ability to easily find a link to a venues website to find out more information and allow me to make a booking.
    6. As a returning user, I would like the abilty to easily find links to a venues social media channels.
    7. As a returning user, I would like the ability to easily find a link to a venues Trip Advisor so I can see their scores and reviews.

* Frequent user goals:

    1. As a frequent user, I would like the ability to recommend venues that I have discovered that I would like to see added to the site.
    2. As a frequent user, I would like the ability to pin places I would like to visit.
    3. As a frequent user, I would like the ability to rate or mark the places I have been.
    4. As a frequent user, I would like to be able to search for new destinations that are not featured using the interactive map.
    
### Wireframes

### Design

#### Colour Scheme

Navy blue (#005B8F) and White (#FFFFFF) were the primary colours used in the site. White text on a navy blue background in the header and footer and navy blue text on a white background for the main page content. These colours complement each other well and inverting them provides a clean point of difference between the header/footer and main body of the pages.

#### Typography

Londrina Shadow is the main font used throughout the site for the site logo and headings.

Londrina Solid is used as the secondary font as it complements the main font and provides a point of difference to the typography of the website

#### Imagery

## Features

### Consistent Site Features and Components

* All pages of the site contain the same **Header** and **Footer** components:

    * The **Header** consists of the site logo in the centre of the page with the navbar menu items situated undernath it.
        * The navigation menu (situated beneath the site logo on all pages) was built using the bootstrap **Navbar** component and features two menu items, **Home** and **Contact**.
    
    * The **Footer** contains the copyright information for the site to the left and links to the Top Spots social media accounts to the right. Note that at the time of publishing, Top Spots does not have any social media accounts, so the link icons are placeholders and link to the home page of the social media platform.

### Home Page

* Interactive Map:
    * The **interactive map** is constructed using the [Google Maps API](https://developers.google.com/maps) and features **custom markers** from [Map Icons Collection](https://mapicons.mapsmarker.com) denoting the type of venue. The map also utilises the [Google Places API](https://developers.google.com/maps/documentation/places/web-service/overview) to allow users to search for places on the map that are not among the featured destinations and add a marker to that location if selected.

* Legend:
     * The map **legend** uses a table of checkboxes to allow the user to toggle whether to show or hide map markers by venue type or completely hide all markers.

* Information Box (Performs two functions on the site):
    * On page load, the **Information Box** displays a welcome message to to welcome users to the site and provide a brief bit of information on the site and how to use it.

    * On marker click, the **Information Box** provides details of the venue, these include:
        * The venue name
        * The venue address
        * A brief description of the venue
        * A link to the venue website
        * A link to make a reservation at the venue
        * Links to the venue social media accounts and Trip Advisor page
        * Images of the venue

### Contact Page

ADD HERO IMAGE DETAILS HERE ------------------------------

* Contact Form:
    * The **Contact Form** uses [EmailJS](https://www.emailjs.com/). It will generate an email referencing the sendEmail.js file when a user submits their information and message.

### Responsive for Device Size

The [Bootstrap4](https://getbootstrap.com/) framework was used to ensure the site was responsive on all device sizes.

* Mobile Devices (Extra Small and Small screen size):

    * The **Bootstrap Grid System** was utilised to stack information vertically on small device sizes to provide positive and efficient UX and allow information to be read easily by the user.

    * If more pages are added to the site and the number of menu items in the navigation bar increrases, the Bootstrap navbar toggler will be utilised to improve UX by reducing the menu items to a dropdown menu format on mobile devices, placed to the right of the site logo. As there are currently only 2 pages to the site, this is not currently needed as the site can be navigated easily on mobile devices.

* Tablet Devices (Medium screen size):

    * At tablet size, the **Bootstrap Grid Sytem** was used to size **Interactive Map** to 2/3 of the screen width (from left), with the **legend** taking up the final 1/3 to the right side of the device viewport.The Information box sits beneath the map and legend, taking up the full width of the device viewport.

    SCREENSHOT

* Desktop/Laptop (Large and Extra Large screen size):

    * At desktop size, the **Bootstrap Grid Sytem** was used to position the **Interactive Map** to the left 1/3 of the screen. The Legend and Information box content are stacked vertically on the right 2/3 of the screen

    SCREENSHOT

### Existing Features

### Features to Implement in Future

## Technologies Used
---

### Languages Used

* HTML
* CSS
* JavaScript

### Frameworks, Libraries and Programs Used

* [Gitpod](https://gitpod.io/) - **Gitpod** was used for the IDE while building the website.
* [Git](https://git-scm.com/) - **Git** was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
* [GitHub](https://github.com/) - **GitHub** is used to store the projects code after being pushed from Git.
* [Bootstrap 4.5.3](https://www.bootstrapcdn.com/) - **Bootstrap** was used to assist with the responsiveness and styling of the website.
* [JQuery](https://jquery.com/) - **JQuery** JavaScript library was used to simplify JavaScript code
* [Font Awesome](https://fontawesome.com/) - **Font Awesome** was used on all pages throughout the website to add icons for aesthetic and UX purposes.
* [Google Fonts](https://fonts.google.com/) - **Google Fonts** were used to import the 'Londrina Shadow' and 'Londrina Solid' fonts into the style.css file to style the fonts used on all pages of the project.
* [EmailJS](https://www.emailjs.com/) - **EmialJS** was used for contact age email.
* [TinyPNG](https://tinypng.com/) - **TinyPNG** was used to reduce the file size of .png/.jpg files used.
* [Balsamiq](https://balsamiq.com/) - **Balsamiq** was used to create the wireframes during the design process.
* [Web Formatter](https://webformatter.com/) - **Web Formatter** was used to beautify code.
* [Am I Responsive](http://ami.responsivedesign.is/) - **Am I Reponsive** was used to test page layouts during the build process.

## Testing
---

Detailed testing information can be found in separate [TESTING.md](TESTING.md) file.

## Deployment
---

### GitHub Pages

The project was deployed to GitHub Pages using the following steps:

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/theopmw/Top-Spots-London)
2. At the top of the Repository (not top of page), locate the "Settings" button on the menu.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. Another dropdown will appear to the right, select "/(root)" in this dropdown.
6. Then click Save.
7. The page will then refresh.
8. Scroll back down through the page to locate the now published [site link](ADD GITHUB PAGE LINK) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps:

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/theopmw/Top-Spots-London)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/theopmw/Top-Spots-London).
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash.
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type "git clone", and then paste the URL you copied in Step 3:

```
$ git clone https://github.com/theopmw/Top-Spots-London
```

7. Press Enter and your local clone will be created.

### Google Maps API Deployment

#### Setting up the project and generating an API Key:

1. Set up the project:
*  In the [Google Cloud Console](https://console.cloud.google.com/), navigate to the project selector page and click **Create Project** to begin creating a new Cloud project.
    * Note that you must also make sure that billing is enabled for your Cloud project. You can check that [here](https://console.cloud.google.com/projectselector2/billing).
2. Enable APIs or SDKs:
* In order to use the Google Maps Platform, you must enable the APIs or SDKs you plan to use with your project on Cloud Console. To enable one or more APIs or SDKs they must be selected from the [Maps API Library page](https://console.cloud.google.com/apis/library).
* From the Maps API Library page, click the API or SDK you want to enable (Top Spots London uses Maps JavaScript API and Places API).
    * If the button says **ENABLE**, click the button to enable the API or SDK.
    * If the button says **MANAGE**, the API or SDK is already enabled and you don't need to do anything further.
    * Clicking either button will display the dashboard for the API or SDK (click the **DISABLE** button to remove the API or SDK from the project).
3. Get an API Key:
* The API key is a unique identifier that authenticates requests associated with your project for usage and billing purposes. You must have at least one API key associated with a project.
* To create an API key:
    1. Go to the **APIs & Services > Credentials** page.
    2. On the **Credentials** page, click **Create credentials > API key**. The **API key created** dialog displays your newly created API key. An API key is a long string containing upper and lower case letters, numbers, and dashes.
    3. Click **Close**. 
    4. The new **API key** is listed on the Credentials page under **API keys** (You must apply restrictions to the API key before using it in production, see below)

#### Restricting the API Key(s):

* API Keys must be restricted to help prevent unauthorized use and quota theft.
* To restrict the API key:
    1. Go to the **APIs & Services > Credentials** page.
    2. Select the project you wish to restrict.
    3. Click the **API Key** you wish to restrict from the List of API Keys.
    4. Select the **application restriction** from the list (Top Spots London uses **HTTP referrers (web sites)**)
    5. In the **Website restrictions** panel below add the website URL you want to restrict the API Key usage to.
    6. Click *ADD AN ITEM**.
    7. Click **SAVE**.
    8. The restrictions will now be saved.

* Note that on this page you can also restrict the APIs that a key can call. Just select **Restrict key** under the **API restrictions** heading, check the relevant API checkboxes, click **OK** and then click **SAVE**. Top Spots London uses the Maps Javacript API and the Place API so is restricted to these two


For futher reading on API Keys, see the Google Documentation for [using API Keys](https://cloud.google.com/docs/authentication/api-keys?hl=en&visit_id=637572115857682925-2461310236&rd=1).




## Credits
---

* [Bootstrap4](https://getbootstrap.com/): Bootstrap Library used throughout the project for the Bootstrap Grid System, to make the site responsive and for select Bootstrap Components.

### Code

### Content

### Media

Map marker icons used were taken from [Map Icons Collection](https://mapicons.mapsmarker.com) (full licence information [here](https://mapicons.mapsmarker.com/about/license/)):

![Restaurant Icon](assets/images/map_icons/restaurant.png) [Restaurant Icon](https://mapicons.mapsmarker.com/markers/restaurants-bars/restaurants/restaurant/)

![Pub Icon](assets/images/map_icons/pub.png) [Pub Icon](https://mapicons.mapsmarker.com/markers/restaurants-bars/bars/bar/)

![Cocktail Bar Icon](assets/images/map_icons/cocktail_bar.png)[Cocktail Bar Icon](https://mapicons.mapsmarker.com/markers/restaurants-bars/bars/cocktail-bar/)

![Street Food Market Icon](assets/images/map_icons/street_food_market.png)[Street Food Market Icon](https://mapicons.mapsmarker.com/markers/restaurants-bars/restaurants/terrace/)

![Breyery Icon](assets/images/map_icons/distillery.png) [Brewery Icon](https://mapicons.mapsmarker.com/markers/restaurants-bars/bars/whiskey/)

![Distillery Icon](assets/images/map_icons/distillery.png) [Distillery Icon](https://mapicons.mapsmarker.com/markers/restaurants-bars/bars/whiskey/)

### Acknowledgements

### Disclaimer

All content on this site was developed for educational purposes only.
