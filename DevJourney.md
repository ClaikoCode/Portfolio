# Development Journey

This section is meant to be updatated as this project evolves. I will write down the larger problems/roadblocks I will encounter, the solutions that I found for them, and the knowledge I gained from solving them. It will serve as a log for my development journey and will help me better solidify new information.

## Day 1 

Learning how to setup a Vite + React project. Simple setup with Node.js and NPM.

Learning the basics of React:

https://react.dev/learn
https://www.youtube.com/watch?v=-DTUdOJv8w8 

Note: Assets from main.jsx seems to have a path that is relative to a subfolder in the project folder as the following path worked for the import of react.svg: "../src/assets/react.svg". This gives a small hint to the "current working directory" equivalent, which I always find is an important back-end piece of information to understand.

I have decided to use BEM. It seems to be a popular naming convention for CSS classes. I did not do much research further into different naming systems as the goal is to have *something* that is commonly used with React so that I at least adhere to *a* structure. I want to avoid bad naming from the start as it would only impair future learning when I start getting confused about my code rather than what I'm trying to express in code.

New units: rem, em, unitless, percentage

rem: root element font size
em: current element font size
unitless: simple scalar values, not sure what these do
percentage: a fraction of an inherited value from its parent

I wanted to make sure that I could dynamically add any future projects or add modifications to project data easily. In the intro for React I noticed that the map function could be used to instantiate React components dynamically for each element in a list. 

Noticed that elements behaved strange when viewport became too narrow. To fix this, I learned a bit about CSS at-rules. In my case, the problem was fixed by changing the flex-direction to column if the width of the viewport is under a certain value. The value I set was 768px, which was picked as that seemed to be the industry standard of going from anything larger than or equal to a tablet over to a phone.