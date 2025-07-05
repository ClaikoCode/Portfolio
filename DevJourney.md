# Development Journey

This section is meant to be updatated as this project evolves. I will write down the larger problems/roadblocks I will encounter, the solutions that I found for them, and the knowledge I gained from solving them. It will serve as a log for my development journey and will help me better solidify new information.

## Day 1 

Learning how to setup a Vite + React project. Simple setup with Node.js and NPM.

Learning the basics of React:

* https://react.dev/learn
* https://www.youtube.com/watch?v=-DTUdOJv8w8 

Note: Assets from main.jsx seems to have a path that is relative to a subfolder in the project folder as the following path worked for the import of react.svg: "../src/assets/react.svg". This gives a small hint to the "current working directory" equivalent, which I always find is an important back-end piece of information to understand.

I have decided to use BEM. It seems to be a popular naming convention for CSS classes. I did not do much research further into different naming systems as the goal is to have *something* that is commonly used with React so that I at least adhere to *a* structure. I want to avoid bad naming from the start as it would only impair future learning when I start getting confused about my code rather than what I'm trying to express in code.

New units: rem, em, unitless, percentage

* rem: root element font size
* em: current element font size
* unitless: simple scalar values, not sure what these do
* percentage: a fraction of an inherited value from its parent

I wanted to make sure that I could dynamically add any future projects or add modifications to project data easily. In the intro for React I noticed that the map function could be used to instantiate React components dynamically for each element in a list. 

Noticed that elements behaved strange when viewport became too narrow. To fix this, I learned a bit about CSS at-rules. In my case, the problem was fixed by changing the flex-direction to column if the width of the viewport is under a certain value. The value I set was 768px, which was picked as that seemed to be the industry standard of going from anything larger than or equal to a tablet over to a phone.

## Day 2

Had some trouble deciding the design of the rest of document. I went in to the project blind without any real design plan because I had no idea what would be possible. Now I see that there is much potential of making simple sleek designs and needed to take some time to think about how I want the whole website to be structured. I landed on creating a section with SVG images of what technologies/language I have experience in. 

This lead me down a path of better trying to understand the "assets" folder compared to the "public" folder. I struggled to get a feel for when to use one over the other. The understanding I have now is that when I want content that should or need to be accessible from a clean URL, like if I want to share a PDF of my CV or a video from a engine demo, the public folder is used. When I need content that only needs to work in the context of my website, the assets folder is used. I learned that when building the website, Vite has free range on how it handles assets, giving them a hashed name after it is done processing the content. The public folder content will not have its name changed and will not be processed in the same way.

Today I deployed my website using Cloudflare! It was surprisingly easy setting everything up as I did try creating a portfolio portfolio website (without React or Vite) previously using GitHub pages and it was a huge hassle and the building was a mess. I am confident I did something wrong back then but I tried using Cloudflare this time as I bought my domain there and noticed I could deploy a static website for free. I asked it to use my GitHub repo as a source, put in the framework I used which automatically filled in the build command (npm run build) and it was deployed quickly after. It also let me use my new domain name to redirect to their host URL and automatically set up the DNS for it.

## Day 7

I wanted to add a navigation bar at the top of the page so it was possible to go to different parts of the page easily as well as to get an overview of its contents. I also wanted the navigation bar to be dynamic so that I could add any reasonable number of items easily. Additionally, I wanted the navigation bar to be fixed so it stays with you as you scroll and I wanted it to be centered as to follow the visual style of the rest of the document. 

Like other components I have created, the NavigationBar component takes in a list of objects where each object contains information about the item that is to be displayed. I decided to use a HTML structure that implemented the nav tag and list tags, which I stumbled across when finding how I should implement this feature. Both of them have added unique accessability features over regular divs as they give hints to what content will be in them. The nav tag can be accessed by a screen reader for example without having to render the element. The list tags lets users maneuver between elements using the TAB key, which is benefit to anyone who prefers a keyboard or to someone who cant use the mouse. I thought these were nice to have as they only added to the usability of the portfolio without requiring any additional development time. The only downside that I thought of at the time is that I would have to explicitly type out these tags if I wanted to apply specific styles to elements that could have been divs in the future. This was a non-issue however, as CSS solves this with the comma separator to apply the same style to different tags.

The centering of the navbar proved to be a much bigger problem than I thought originally. When the position is set to fixed, all sizes become relative to the whole viewport. This meant that 100% width was not 100% width of its parent element (which would be the portfolio div), but instead was 100% of the VP. This made it frustrating to size properly as I now had to match a hardcoded value that existed in the CSS file for the portfolio. I also wanted it to be dynamic, so the scaling and positioning had to remain in the middle at all times. The problem was solved by using transform translations and absolute positioning.