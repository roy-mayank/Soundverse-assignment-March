# Soundverse Internship Assignment - March 2025

This monorepo is a submission for the assignment handed for the Soundverse internship on 18th March 2025 through Internshala.com.

The task provided was to contruct a replica of soundverse.ai's DNA explore page with Figma files provided to follow.

Goals Highlighted were:

- Artist cards that host basic info and can play audio
- Responsive UI replication of overall background
- A relative dummy side navbar
- Tooltips providing information about the material icons in side navbar
- FastAPI Backend to produce dummy data

### Tech Stacks Used

Frontend - Next.js with Tailwind CSS
API - FastAPI (only dummy data)
Audio - Howler
Tooltips - Radix-ui

### How to setup

Since neither the API nor the frontend has been hosted on the internet, this repo can only be accessed locally.

To do so in developer mode:

1. First navigate into the backend folder
2. Here, activate the virtual environment by using command: `.venv\Scripts\Activate.ps1`
3. Then run FastAPI by using command: `fastapi dev main.py` [This is usually hosted in port 8000 of the localhost (please change the link in page.js accordingly)]
4. Then navigate into the frontend folder containing next.js project
5. Here, use `npm run dev` or `npm run build` + `npm run start`(production) to start up [This is usually hosted in port 3000 or 3001]
6. Finally, open the web application on hosted link

### Challenges faced

// Issue Category - Issue Description - Solution & How I got there - Lessons (if any)

1. CSS Troubles - Arranging the genres and play button inside the artistcard, overlayed on the image - Found `inset-0` tailwindcss feature which allows centering of the play button in div tag and utilized absolute positioning instead of struggling with flex-reverse
2. CSS Troubles - Artistcards were overlapping in smaller screen sizes - Better paddings, adding grid flow and liberal responsive styling use (md,sm, lg, etc.)
3. Module Integration - ShadCN and Tippy simply were not equipped with react 19 - Found the root module used in shadcn (radix-ui) and used their documentation to pursue the tooltip creation
4. Module Integration - Howler JS documentation was not as comprehensive - Used example repos to get the logic better and utilized them in the repo
