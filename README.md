# Sneaker Store - README

Hey there! Welcome to My Sneaker Store, a one-page site built with React and Vite for an assignment and to show how easy it is to favorite them. Here’s a quick rundown:

	• A single-page store where you can favorite (♥) items.
	• Built using React, styled with Tailwind, and set up via Vite.
	• Pulls product data from a JSON file.
 	• Feature Banner component to highlight the sneaker of the week.

How to get started: 

    1. Clone or Download this repo.
	2. Open a terminal, go into the project folder, and run:
        npm install
        npm run dev
    3. That’s it! The app will spin up, and you can check it out in your browser at whichever URL Vite mentions.


Challenges:
    • I forgot to do npx tailwindcss init while creating the project and found some issue with adding it after the fact. Using OpenAI and Stack Overflow guided me through the process to add it 		successfully
    • Once my code was complete, the page was stuck at a smaller width and skewed to the left. The breakpoints also showed a white background below the Tailwind bg-grey-100 while reajusting to 		sizing. To solve this, I used DevTools in Chrome to identify the problem, and had OpenAI check voer my code. It was there where I realized my vite.config file needed updating, and body in 		index.css needed to have justify-content and align-items to center the page with display: flex. I also added the same background colour Tailwind uses to this as well
