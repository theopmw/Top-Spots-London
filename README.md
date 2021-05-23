
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

If the site is perceived as successful there is scope to substantially increase the scale of the site, it is anticipated that the site could be expanded to include the following features:

* Add a way for users to save or mark the venues they like
* Add weekly/monthly round-ups of venues, for example "Best venues to visit this week"/"This months Top Spots"
* Add a way for users to browse venues in list format, rather than using the interactive map
* Add a way for users to search or filter venues by area and offering (cuisine, craft beer etc.)
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

First time user goals:

1. As a first time user, I want to easily understand the purpose of the site.
2. As a first time user, I want to easily understand how to use the site.
3. As a first time user, I want to easily understand how to navigate the site in order to find what I need efficiently.

![Landing Page](assets/images/readme_screenshots/first_time_user_goals-landing_page.png)

4. As a first time user, I want to be able to easily interact with the map to find out information about a venue.

![Venue Page](assets/images/readme_screenshots/first_time_user_goals_venue.png)

Returning user goals:

1. As a returning user, I want to easily find other places I would like to visit.

![Map of Places](assets/images/readme_screenshots/returning_user_goals_map.png)

2. As a returning user, I would like to be able to make contact with any questions or comments I have.

![Contact Page](assets/images/readme_screenshots/returning_user_goals_contact_page.png)

3. As a returning user, I would like the ability to easily find a link to a venues website to find out more information and allow me to make a booking.

![Website and Booking Links Highlighted on Venue Page](assets/images/readme_screenshots/returning_user_goals_website_booking.png)

4. As a returning user, I would like the abilty to easily find links to a venues social media channels.

![Social Links Highlighted on Venue Page](assets/images/readme_screenshots/returning_user_goals_socials.png)

5. As a returning user, I would like the ability to easily find a link to a venues Trip Advisor so I can see their scores and reviews.

![Trip Advisor Link Highlighted on Venue Page](assets/images/readme_screenshots/returning_user_goals_tripadvisor.png)

6. As a returning user, I would like to see images of the venues.

![Venue Images Highlighted on Venue Page](assets/images/readme_screenshots/returning_user_goals_venue_images.png)

7. As a returning user, I would like the ability to filter venues on the map by type.

![Legend and Map Highlighted on Venue Page](assets/images/readme_screenshots/returning_user_goals_legend.png)

Frequent user goals:

1. As a frequent user, I would like the ability to recommend venues that I have discovered that I would like to see added to the site.

![Contact Page](assets/images/readme_screenshots/returning_user_goals_contact_page.png)

2. As a frequent user, I would like to be able to search for new destinations that are not featured using the interactive map and find out where they are.

![Map Search Hightlighted on Venue Page](assets/images/readme_screenshots/frequent_user_goals_search.png)
    
### Wireframes

### Design

#### Colour Scheme

Navy blue (#005B8F) and White (#FFFFFF) were the primary colours used in the site. White text on a navy blue background in the header and footer and navy blue text on a white background for the main page content. These colours complement each other well and inverting them provides a clean point of difference between the header/footer and main body of the pages.

#### Typography

Londrina Shadow is the main font used throughout the site for the site logo and headings.

Londrina Solid is used as the secondary font as it complements the main font and provides a point of difference to the typography of the website

Raleway is used as the third font as it is very clear and legible. This fonr was used for the main blocks of text as it is very easy to read. Additional letter spacing was added to improve legibilty further, especailly on smaller devices.

#### Imagery

The imagery used for the hero image is from [Unsplash](https://unsplash.com/).

Venue images were taken from the individual venue accounts on [Instagram](https://www.instagram.com/).

Further details can be found in the Acknolegements section below.

## Features

### Consistent Site Features and Components

* All pages of the site contain the same **Header** and **Footer** components:

    * The **Header** consists of the site logo in the centre of the page with the navbar menu items situated undernath it.
        * The navigation menu (situated beneath the site logo on all pages) was built using the bootstrap **Navbar** component and features two menu items, **Home** and **Contact**.
    
    * The **Footer** contains the copyright information for the site to the left and links to the Top Spots social media accounts to the right. Note that at the time of publishing, Top Spots does not have any social media accounts, so the link icons are placeholders and link to the home page of the social media platform.

### Preloader

* The site features a **preloader** to allow the site to fully load before the page is displayed

### Home Page

* Interactive Map:
    * The **interactive map** is constructed using the Google [Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/overview#Inline) and features **custom markers** from [Map Icons Collection](https://mapicons.mapsmarker.com) denoting the type of venue. The map also utilises the [Places API](https://developers.google.com/maps/documentation/places/web-service/overview) to allow users to search for places on the map that are not among the featured destinations and add a marker to that location if selected.

* Hero Image:
    * The site features a **hero image** on page load. On marker click, this is hidden and replaced but 3 images of the venue linked to the marker.

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
    * The reservations and social liks are dynamic so if the venue does not have one of them (eg. no Twitter account) it will be hidden on their page, improving the UX.

* Legend:
     * The map **legend** uses a table of checkboxes to allow the user to toggle whether to show or hide map markers by venue type or completely hide all markers.

### Contact Page

* Contact Form:
    * The **Contact Form** uses [EmailJS](https://www.emailjs.com/). It will generate an email referencing the sendEmail.js file when a user submits their information and message.
    * The form will generate a "Please fill in this field" alert box if the user does not fill out all input boxes. It will also check for a valid email before allowing the form to be submitted

### Responsive for Device Size

The [Bootstrap4](https://getbootstrap.com/) framework was used to ensure the site was responsive on all device sizes.

* Mobile Devices (Extra Small and Small screen size):

    * The **Bootstrap Grid System** was utilised to stack information vertically on small device sizes to provide positive and efficient UX and allow information to be read easily by the user.

    * If more pages are added to the site and the number of menu items in the navigation bar increrases, the Bootstrap navbar toggler will be utilised to improve UX by reducing the menu items to a dropdown menu format on mobile devices, placed to the right of the site logo. As there are currently only 2 pages to the site, this is not currently needed as the site can be navigated easily on mobile devices.

    SCREENSHOT

* Tablet Devices (Medium screen size):

    * At tablet size, the **Bootstrap Grid Sytem** was used to size **Interactive Map** to 2/3 of the screen width (from left), with the **legend** taking up the final 1/3 to the right side of the device viewport.The Information box sits above the map and legend, taking up the full width of the device viewport.

    SCREENSHOT

* Desktop/Laptop (Large and Extra Large screen size):

    * At desktop size, the **Bootstrap Grid Sytem** was used to position the **Interactive Map** to the left 1/3 of the screen. The Legend and Information box content are stacked vertically on the right 2/3 of the screen.

    SCREENSHOT

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
* [JQuery](https://jquery.com/) - **JQuery** JavaScript library was used to simplify JavaScript code.
* [Favicon.io](https://favicon.io/) - **Favicon.io** was used to create the favicon for the website.
* [Imgbb](https://imgbb.com/) - **Imgbb** was used to host the custom map markers used on the website
* [Font Awesome](https://fontawesome.com/) - **Font Awesome** was used on all pages throughout the website to add icons for aesthetic and UX purposes.
* [Loading.io](https://loading.io/) - **Loading.io** used to create preloader.
* [Google Fonts](https://fonts.google.com/) - **Google Fonts** were used to import the 'Londrina Shadow' and 'Londrina Solid' fonts into the style.css file to style the fonts used on all pages of the project.
* [EmailJS](https://www.emailjs.com/) - **EmialJS** was used for contact page email.
* [TinyPNG](https://tinypng.com/) - **TinyPNG** was used to reduce the file size of .png/.jpg files used.
* [Balsamiq](https://balsamiq.com/) - **Balsamiq** was used to create the wireframes during the design process.
* [Web Formatter](https://webformatter.com/) - **Web Formatter** was used to beautify code.
* [Am I Responsive](http://ami.responsivedesign.is/) - **Am I Reponsive** was used to test page layouts during the build process.

## Testing
---

Detailed testing information can be found in separate [TESTING.md](https://github.com/theopmw/Top-Spots-London/blob/master/TESTING.md) file.

## Git and Version Control
---

This project is managed using Git version control system.

For each maningful change made, Git is used to stage, commit and push the files to the [Top Spots London repository](https://github.com/theopmw/Top-Spots-London) on GitHub.

For each change made, the following process was followed, a description of the different commands used throughout the project and their uses has also been provided:

* Staging:
    * When a file has been modified and it must be marked to go it to your next commit.
    * To check the status of your Git repository, including files that are not staged and files that are staged, the ```git status``` command is used.
    * To stage modified files, the ```add``` command is used, which can be run multiple times before a commit. 
        * You can either specify the specific file with ```add```. For example: "```git add my_file.html```". Or add stage all files in te current directory with "```git add .```".
        * You can also remove files from staging without losing the changes made to the file using ```reset```. For example: "```git reset my_file.html```".
* Committing:
    * Once updates have been staged, you are ready to commit them, which will record the changes made to the repository.
    * Run the ```commit``` command to commit staged files, a meaningfull commit message must be included to track commits. For example: "```git commit -m "Meaningful commit message" "```.
    * You can stage and commit all tracked files with a condensed message: "```git commit -am "Meaningful commit message" "```.
    * The commit message can be modified using the ```--amend``` flag. For example: "```git commit --amend -m "New commit message""```.
* Pushing:
    * Once files have been committed and a commit message has been provided, they are pushed to the remote repository using the ```push``` command.
    * "```git push```" will trasnsmit the local commits to the remote repository.

Git branching was also utilised to isolate the production of new features and merge them with the master branch throughout the development cycle of the project.

* Branches
    * New branches were created using ```git branch new-branch```.
    * ```git switch new-branch``` was used to swich to the new branch.
    * A feature was then worked on in the new branch and modifications were staged, committed and pushed.
    * ```git switch master``` was used to switch back to the master branch.
    * The branch was then merged with the master using ```git merge new-branch```
    * When the branch had been merged with the master and was no longer needed, ```git branch -d new-branch``` was used to delete the branch.

Parts of this section used the following article for reference: [How To Use Git: A Reference Guide](https://dev.to/digitalocean/how-to-use-git-a-reference-guide-6b6).

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

* Note that on this page you can also restrict the APIs that a key can call. Just select **Restrict key** under the **API restrictions** heading, check the relevant API checkboxes, click **OK** and then click **SAVE**. Top Spots London uses the Maps Javacript API and the Place API so is restricted to these two.

For futher reading on API Keys, see the Google Documentation [here](https://cloud.google.com/docs/authentication/api-keys?hl=en&visit_id=637572115857682925-2461310236&rd=1).

#### Maps Javascript API:

* Top Spots London uses the **inline loading** method to load the **Maps JavaScript API**:
    1. The Maps JavaScript API is loaded using a ```script``` tag, which can be added inline in your HTML file or dynamically using a separate JavaScript file.
    2. Top Spots London uses the **Inline Loading** method.
    3. To load the Maps JavaScript API inline in an HTML file, add a script tag as show below: 
    ```
    <script async
    src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
    </script>
    ```
For futher reading on Maps JavaScript API, see the Google Documentation [here](https://developers.google.com/maps/documentation/javascript/overview#Inline).

#### Adding the Places API:

* Libraries are modules of code that provide additional functionality to the main Maps JavaScript API but are not loaded unless you specifically request them. Top Spots London uses the Places API in order to add search funtionality to the masp, allowing users to serch for places and add a temporary mraker to the map.
* To load the Places API:
    1. As above, to load the JavaScript code for the JavaScript API, you include a bootstrap URL on your page, of the form ```https://maps.googleapis.com/maps/api/js```. This bootstrap request loads all of the main JavaScript objects and symbols for use in the Maps JavaScript API. Some of the API features are also available in self-contained libraries which are not loaded unless you specifically request them. Breaking up supplemental components into libraries allows the main API to load (and parse) quickly. You only incur the additional overhead of loading and parsing libraries if you need them.
    2. You can load additional libraries by specifying a libraries parameter in the bootstrap request, and supplying the name of the library or libraries. You can specify multiple libraries as a comma-separated list. You then access the libraries via the ```google.maps.libraryName``` namespace.
    3. In the case of Top Spots London the bootstrap reqest is as below:
    ```
    <script
    src="https://maps.googleapis.com/maps/api/js?   key=AIzaSyD34uhPBsPD7JorzkINLXHnLaGexxT8Us8&libraries=places&v=weekly">
    </script>
    ```

For futher reading on additional libraries, see the Google Documentation [here](https://developers.google.com/maps/documentation/javascript/libraries).

## Credits
---
### Code

* My Mentor, Spencer Barriball for providing guidance and inspiration.
* [Bootstrap4](https://getbootstrap.com/): Bootstrap Library used throughout the project for the Bootstrap Grid System, to make the site responsive and for select Bootstrap Components.
* Various online resources utilised for guidance throught the project - [CSS Tricks](https://css-tricks.com/), [Stack Overflow](https://stackoverflow.com/), [W3 Schools](https://www.w3schools.com/) and Google Developers Documentation.
    * All code modified from external sources to suit the needs of the project are attributed via comments above the code throughout the project.
* The Code Institute Tutor Team for assistance with the creation of the site, especially in the development of the preloader.

### Content

* All content was written by the developer.

### Media

#### Icons:

* Map marker icons used were created using [Map Icons Collection](https://mapicons.mapsmarker.com) (full licence information [here](https://mapicons.mapsmarker.com/about/license/)):

![Restaurant Icon](assets/images/map_icons/restaurant.png) [Restaurant Icon](https://mapicons.mapsmarker.com/markers/restaurants-bars/restaurants/restaurant/)

![Pub Icon](assets/images/map_icons/pub.png) [Pub Icon](https://mapicons.mapsmarker.com/markers/restaurants-bars/bars/bar/)

![Cocktail Bar Icon](assets/images/map_icons/cocktail_bar.png)[Cocktail Bar Icon](https://mapicons.mapsmarker.com/markers/restaurants-bars/bars/cocktail-bar/)

![Street Food Market Icon](assets/images/map_icons/street_food_market.png)[Street Food Market Icon](https://mapicons.mapsmarker.com/markers/restaurants-bars/restaurants/terrace/)

![Breyery Icon](assets/images/map_icons/distillery.png) [Brewery Icon](https://mapicons.mapsmarker.com/markers/restaurants-bars/bars/whiskey/)

![Distillery Icon](assets/images/map_icons/distillery.png) [Distillery Icon](https://mapicons.mapsmarker.com/markers/restaurants-bars/bars/whiskey/)

#### Favicon: 

* The page favicon was generated using https://favicon.io/.

#### Imagery:

* Hero image: [Assorted Wine Bottles by David Straight](https://unsplash.com/photos/VZY6o3Q0EEI), Unsplash.

* Venue Images: All other images are from the venue profiles on [Instagram.com](https://www.instagram.com/).

#### Loader 

* Preloader created using [Loading.io](https://loading.io/).

### Acknowledgements

* My Mentor, Spencer Barriball, for continuous feedback, support, guidance and inspiration.
* Code Institute Tutor Support, for their continuous support and guidance.
* Code Institute Assesment team, for providing insightful feedback, reducing any re-ocurring errors that may have carried over from my MS1 project, [Done London](https://github.com/theopmw/Done-London).

### Disclaimer

All content on this site was developed for educational purposes only.
