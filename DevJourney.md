# Development Journey

This section is meant to be updatated as this project evolves. I will write down the larger problems/roadblocks I will encounter, the solutions that I found for them, and the knowledge I gained from solving them. It will serve as a log for my development journey and will help me better solidify new information.

## Day 1 

Learning how to setup a Vite + React project. Simple setup with Node.js and NPM.

Learning the basics of React:

* https://react.dev/learn
* https://www.youtube.com/watch?v=-DTUdOJv8w8 

Note: Assets from main.jsx seems to have a path that is relative to a subfolder in the project folder as the following path worked for the import of react.svg: "../src/assets/react.svg". This gives a small hint to the "current working directory" equivalent, which I always find is an important back-end piece of information to understand.

I have decided to use BEM as it seems to be a popular naming convention for CSS. I did not do much research further into different naming systems as the goal was to have *something* that is commonly used with React so that I at least adhered to *a* structure. I wanted to avoid bad naming from the start as it would only impair future learning when I start getting confused about my code rather than what I'm trying to express in code.

New units: rem, em, unitless, percentage

* rem: root element font size
* em: current element font size
* unitless: simple scalar values, not sure what these do
* percentage: a fraction of an inherited value from its parent

I wanted to make sure that I could dynamically add any future projects or add modifications to project data easily. In the intro for React I noticed that the map function could be used to instantiate React components dynamically for each element in a list. I chose to do this for listing my projects. Each row is its own component that takes in a structure containing the data for each project and the project information are supplied as JS structures in a list that is mapped to a lambda function which instantiates them dynamically.

Noticed that elements behaved strange when viewport became too narrow. To fix this, I learned a bit about CSS at-rules. In my case, the problem was fixed by changing the flex-direction to column if the width of the viewport is under a certain value. The value I set was 768px, which was picked as that seemed to be the industry standard of going from anything larger than or equal to a tablet over to a phone.

## Day 2

Had some trouble deciding the design of the rest of document. I went in to the project blind without any real design plan because I had no idea what would be possible. Now I see that there is much potential of making simple sleek designs and needed to take some time to think about how I want the whole website to be structured. I landed on creating a section with SVG images of what technologies/languages I have experience in. 

This lead me down a path of better trying to understand the "assets" folder compared to the "public" folder. I struggled to get a feel for when to use one over the other. The understanding I have now is that when I want content that should or need to be accessible from a clean URL, like if I want to share a PDF of my CV or a video from a engine demo, the public folder is used. When I need content that only needs to work in the context of my website, the assets folder is used. I learned that when building the website, Vite has free range on how it handles assets, giving them a hashed name after it is done processing the content. The public folder content will not have its name changed and will not be processed in the same way.

Today I deployed my website using Cloudflare! It was surprisingly easy setting everything up as I did try creating a portfolio website (without React or Vite) previously using GitHub pages and it was a huge hassle and the building was a mess. I am confident I did something wrong back then but I tried using Cloudflare this time as I bought my domain there and noticed I could deploy a static website for free. I asked it to use my GitHub repo as a source, put in the framework I used which automatically filled in the build command (npm run build) and it was deployed quickly after. It also let me use my new domain name to redirect to their host URL and automatically set up the DNS for it.

## Day 3

Learned more about SVG formats today as I tried importing wordmark SVG for DX11 and DX12 logos. As I got the SVGs from different sources they were different sizes and had different levels of built-in whitespace. I used an external website to fix the whitespace problem but noticed that they were impossible to see on the website. This problem made me go down a small rabbit hole on what SVG files actually are and how SVG images work. SVG files are nothing more than text that defines an `<svg>` HTML tag and importing them is similar to including a header file in C/C++. In the SVG tag a viewport is defined with minimum dimenions and the dimensions itself. The SVG tag also has a width and a height argument which did not exist. It is therefore up to the styling to define the size of these elements. I assume that the width and height in the viewport is used in the background to calculate aspect ratios correctly but they do not say anything about what size the element should be rendered as. I looked into the actual text content of the files and indeed, my wordmark icons did not have width and height defined whilst the icons I imported for programming languages did. I solved the problem by simply setting a minimum height in CSS so it takes up a desired amount of vertical space.

Building from the previous problem, I notice that vertical space and horizontal space are not equal in "value" when talking about websites, which is obvious in hindsight. You scroll vertically on a website, giving you essentially "infinite" space in that direction but the horizontal space can be seen as a constant given a certain device/screen. This made me subconsciously prefer to define scales in terms of height and let the width be resolved automatically rather than the reverse. Obviously, you dont want to take too much vertical space as it could quickly become an annoyance having to scroll a lot to get through the websites content. I try to always look at the horizontal whitespace to see if I can arange my elements differently to use that space more efficiently.