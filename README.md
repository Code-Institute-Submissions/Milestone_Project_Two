
# Handpicked Brighton

---

## Overview

This is a visitors guide to the best place to eat, drink and stay in Brighton. It provides the user with a selection of the best that the city has to offer for their time there. I wanted to highlight a 'locals' view of what's great and what they would tell visitors to do and experience it as a local would.

The illustration on the **HOME** page introduces the quirky and playful vibe that Brighton has. It is relaxed and fun. 

The main sea-green colour used on the website reflect the colour of the paint on the railings and lamp posts etc around the city. It's very much the colour of Brighton, so adds a subtle visual signpost.

I created the Handpicked Brighton logo to reflect the values of the city. The handwritten font is used to show the creative side and the 'handpicked' aspect as if it's a list written by an actual person. The San Serif is bold, stylish and confident. The two contrast and compliment each other. I used the font family **Lato** in 300 and 900 for visual contrast.

---

## UX

The site is fully responsive, so can be viewed on all devices. This makes it fun and easy to plan your trip from a laptop or tablet from home, or from your phone on the move.

The navigation is always visible allowing the user to click back and forth to each section easliy. The **HOME** page has three large buttons that reflect the Navigation Bar to allow an alternative way to get around the site.

Each section (**EAT, DRINK** and **STAY**) have nine large visual buttons to choose from showing an enticing image of the location, it's name and a simple one word description to give the user help in deciding where to click.

Each button then takes you to a review page, with a large map showing the location of the venue and a write-up describing it. The bespoke map was designed using [Styling Wizard: Google Maps APIs](https://mapstyle.withgoogle.com/) and matches the website colours to enhance the look of the page. At the end of the review is a simple button taking the user to the website, and another taking the user back to the **HOME** menu.

The footer is only visible on the **HOME** page so as not to crowd the simplicity of the other pages. It contains the site's social media.


### User Stories

As a user, I want to quickly and easily find interesting and out of the way places to go in Brighton. 

I want to feel straight away that this site is my kind of style and I can trust it's recommendations.

**User 1: Day tripper:** The user here is only going to be in town for a day, so will want somewhere fun and interesting to have some lunch or dinner, and a few drinks before heading home. They won't want to waste time going places that aren't great. On the site they can discover some interesting places to really make the most of their day.

**User 2: Weekender:** The user here is down for a few days over the weekend. Having never been to Brighton before they are looking for an interesting experience to remember. They don't want to be stuck with the hordes of other day-trippers and toursist, they want to go where the locals go and see the 'real' Brighton.

**User 3: Local resident:** The user here is a resident of the city, that wants to find somewhere new that they just didn't know about.

**User 4: Local resident:** As a local resident, the user has been asked for their opinion on where to go in Brighton. They can send a link to this website as quick and easy way to achieve this.

---

## Features

All the pages follow the stylish, simple theme, picking up the typograhy and colour. 

### Navigation Bar

This holds all the links to the main sections of the site: **HOME, EAT, DRINK** and **STAY**. This allows the user to navigate quickly to the relevant section. the **Handwritten Brighton** logo also acts as a link to the **HOME** page.

### Home

This is the first page a user comes to, and it has to make a big impact and entice them to want to go further. By having a funky, fun image on the **HOME** page, the user can feel that this is going to be a site with a cool vibe, which reflects the the city. If they want to tap into the feel of the city and get under its skin, this will be the place to go. The stylish logo and the contempory typography also give a feel of Brighton. The strap line *"YOUR GUIDE TO THE LOCAL SIDE OF BRIGHTON"* tells the user just what the purpose of the site is. To make you feel like you're in-the-know.  

The three simple buttons, **EAT, DRINK** and **STAY** immediately entice the user to go further and explore. Their simple message means that it's clear what they will show the user.

### Footer

The footer only appears on the **HOME** page, so not to overcrowd and complicated the following pages. It contains the site's social media.

### Eat, Drink, Stay pages

These are the pages that show when the **EAT, DRINK** or **STAY** buttons are clicked. They show an arrangement of nine handpicked venues to get food, drink or to stay. The large images give a visual climpse of what the venue looks like. The strong, stylish typography of the name of the venue with a one word classifications under it gives the user more clues about if it's the type of venue they are interested in. There is a simple, clean hover when the mouse glides over each box to show it is highlighted.

### Venue review pages

Once a venue is chosen from either **EAT, DRINK** or **STAY**, the user is taken to a page which displays the information for that venue. It has a large bespoke map with a marker showing the location, a review of the venue and a link to their website. There is also a button to take you back to the **HOME** page.

---

## Wireframes

These are my original wireframes for my site:

![IMG](/wireframes/HandpickedWireframe.png)

---

## Features left to implement

1.There would ideally be many more options to choose from in each section. I chose nine as a nice number for the grid.
2. On each review page I would have liked to put in more links to other options. These would include a link to a booking site such as Trip Advisor or a site to find nearby parking or transport.
3. On the map markers, I would want to have aditional information such as address, contact details, opening times and weblinks.

---

## Technologies used

1. [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
2. [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
3. [JavaScript](https://www.javascript.com/)
4. [jQuery](https://jquery.com/)
5. [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
6. [Font Awesome](https://fontawesome.com/)
7. [Google Maps API](https://developers.google.com/maps/documentation)
8. [Google Fonts](https://fonts.google.com/)
9. [Balsamiq Wireframes](https://wireframestogo.com/)
10. [TinyPNG](https://tinypng.com/)
11. [Styling Wizard: Google Maps APIs](https://mapstyle.withgoogle.com/)

---

## Testing

To test both my HTML and my CSS, I ran them through the W3C validation websites. [W3C Markup Validation Service](https://validator.w3.org/), and [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/).
This allowed me to catch any problems such as rouge punctuation marks or incorrect code. This helped me go back in and change the errors so my code was more efficient and worked properly.

My first code was very long with much repetition. It worked OK, but needed to be made simpler. each time i cut back the code, I would  check that all was still working. If it wasn't working, I would go back to a place where it was OK and start cutting again. Testing by refreshing the site all the time. 

### Responsiveness
1. I wanted my site to be fully responsive and mobile friendly. I used **Bootstrap** as my HTML framework to achieve this. While deciding on the final grid for each breakpoint I was able to make the browser window bigger and smaller, and use Chrome Development Tools to easily see which grid was the best, and looked perfect in all configurations. I continued to do this throughout the build to make sure it still all worked.

### Navigation Bar
1. Test that works at all sizes and toggles down when goes to mobile size by expanding and contracting screen size, and using Chrome Developer Tools. 
2. Test all links by hovering over to change colour and by and by making sure they redirect to relevant sections by clicking between them.
3. Test that it is always at the top of the site by clicking through the pages.
4. Testing that only the link that matched the page you were on was highlighted.

#### Problems and solutions
I had a problem with the Navigation Bar. There was a scroll bar along the bottom of the site, which shouldn't have been there. I discovered that this was caused by the Navigation Bar being 100 view width. To fix this I changed the view width to 98.5, which was the largest I could use without the scroll bar showing. 

### Home page
1. Test the image fits the whole screen at all sizes by expanding and contracting screen size, and using Chrome Developer Tools.
2. Test the main message is visible at all sizes by expanding and contracting screen size, and using Chrome Developer Tools.
3. Test **EAT, DRINK, STAY** butons work by hovering over them to change opacity and by clicking and seeing if they take you to the relevant page.

#### Problems and solutions
I had a problem the background image cutting off as it was at 100 view height. I fixed this by having the view height at 92.75 so the image fitted nicely when loaded on all devices.

### Eat, Drink, Stay pages
1. Make sure grid of images flows with the page breaks by expanding and contracting screen size, and using Chrome Developer Tools.
2. Test the headings and subheadings are visible on all sizes by expanding and contracting screen size, and using Chrome Developer Tools.
3. Test tiles' hover works by moving the mouse over them to change opacity.
4. Test all tiles link to relevant pages when clicked.

### Review pages
1. Make sure grid flows with the page breaks by expanding and contracting screen size, and using Chrome Developer Tools.
2. Test the headings, text and maps are visible on all sizes by expanding and contracting screen size, and using Chrome Developer Tools.
3. Test all weblinks to make sure they link to the relevant sites.
4. Test *Back to home* button works on all review pages when clicked.

#### Problems and solutions
I wrote a few sets of code to call the data for the review pages, such as the name, review, website and the latitude and longitude. My code got cleaner each time. My first had 27 click functions that called the data in from the index.html and showed the relevent page and map. This was too long. My second turned the data into 27 objects that were called by 27 click functions. This was better as it used just one review page, and replaced the data each time. My final version placed all my data into an array and I wrote a function that filtered out which data I wanted from the array and placed it onto the page. This last one was the cleanest, but was also the hardest to get right, as I struggled to get it to work. See *Console.log() testing* below for details.

### Footer with Social buttons
1. Test buttons are live and hover works by placing cursor over them to change colour.
2. Test Footer panel is only on home page and fits on all devices using Chrome developer tools.

### Real life user testing
I tested this out with several family members and friends. This resulted in me designing my own Google Map in [Styling Wizard: Google Maps APIs](https://mapstyle.withgoogle.com/) as it was felt that a standard map not only looked a bit basic, but also already had all the standard place markers on it.

### Console.log() testing
Testing with the **console.log()** was crucial when getting the function to call data from an array and place it on the review pages. Having written an array and then a click function, I found it wasn't working. The page was loading the data as undefined, meaning that it wasn't finding my array data.
To find out what was happening I used console.log() at different places in my function and tested what data was coming back. Once I had established that the filter was getting the data, but it wasn't being seen. I was able to change my if fuction to allow the collected objects to show on the pages.  

### Known bugs

#### Navigation Bar
The Navigation bar being reduced to 98.5vw has cause a tiny bit of the home page image to show when scolling.

#### Home page background image
The background being reduced to 92.75vh has caused white space to appear at the bottom on very large screens. I tried different view heights and felt that this was the best solution as it works well on the most popular devices such as phones, tablets and laptops.

---

## Deployment
My site is deployed on GitHub. 

1. To share your project with others, first open **GitHib** in the browser.
2. Sign into **GitHub** with your username and password.
3. Under **Repositories** find your project, and click on it to open it's repository.
4. click on the **settings** button on your project's page.
5. Scroll down to the section called **GitHub Pages**. 
6. Under the heading **Source** there's a button with **None** on it. Click that button and select **Master Branch**.
7. The page will then reload giving you a weblink to share.

I have been pushing my code through to GitHub very regularly as, on occasion, something has gone wrong and I've had to go into my history and retrieve bits of code that I know will work. 

---

## Credits

### Thanks

My mentor **Simen Dehlin** for all the advice and pointers. And for always pushing me to go further.

**Chris Quinn (2BN-Chris_alumnus)** for his help on Slack when I was stuck on my code.

All the **tutors** that helped me along the way on the **Tutor Support**. 

**RubberDucky** for inspiration and sage advice in the lonely dark hours.

### Images

Home image was sourced from the [iStock](https://www.istockphoto.com/gb) image library.

All venue images are from the venues' own websites and social media.

### Text

All venue text is from the venues' own websites and social media.

---

## Acknowledgements

### Anna Gilhespy website
I used Anna Gilhespy's website to help me work out the structure of the grid.
[Anna Gilhespy](https://ajgreaves.github.io/bootstrap-grid-demo/)

### Traversy Media YouTube
I watched Traversy Media's YouTube tutorial videos, [JavaScript Crash Course For Beginners](https://www.youtube.com/watch?v=hdI2bqOjy3c), and [JavaScript Higher Order Functions & Arrays](https://www.youtube.com/watch?v=rRgD1yVwIvE) to help me understand JavaScript.

### The Coding Train YouTube
I watched The Coding Train's Youtube tutorial video, [16.8: Array Functions: filter() - Topics of JavaScript/ES6](https://www.youtube.com/watch?v=qmnH5MT_luk), for help with understanding Filter.





