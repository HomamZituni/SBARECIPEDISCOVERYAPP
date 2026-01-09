# Recipe Discovery App

A React-based recipe discovery application that allows users to browse, search, and save their favorite recipes using TheMealDB API.

## Features

- Browse random recipes on the homepage
- Filter recipes by category 
- Search for recipes by name
- View detailed recipe information including ingredients and instructions
- Save favorite recipes 
- Responsive design with navigation bar

## Technologies Used

- React
- React Router 
- Context API 
- Custom hooks 
- TheMealDB API

## Installation and Setup

Clone the repository:
git clone https://github.com/HomamZituni/SBARECIPEDISCOVERYAPP.git
change directories into the main folder
cd SBARECIPEDISCOVERYAPP/recipe-discovery-app/src
npm install
npm run dev

Reflection

The most challenging art as debugging the issues with data rendering and routing. I kept getting blank pages because the route parameters did not match the component names. I had to check out I was tracing the data flow and to pay closer attention to the naming consistency. 
One key design decision was to extract API logic into reusable useFetch hooks instead of calling fetch directly inside each component. This kept the page and component files focused on rendering and user interactions and the hook handled data fetching, loading and error states. I was also able to reuse that logic across multiple pages. Future changes will be much simpler to implement with the modularization of the hooks. 
