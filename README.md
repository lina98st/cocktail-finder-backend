# Cocktail Finder Backend

REST API for the CocktailFinder app built with Node.js, Express, and MongoDB.

## Setup

npm install
npm start

Uses nodemon for automatic server restarts during development.

## Endpoints

GET /cocktails - get all cocktails
POST /cocktails - add a new cocktail
GET /cocktails/:id - get a single cocktail
PUT /cocktails/:id - update a cocktail
DELETE /cocktails/:id - delete a cocktail
POST /users - register a new user
POST /users/login - login a user

## Dependencies

- Express
- Morgan
- Body-Parser
- Mongoose
- Nodemon

## Related

- [Cocktail Finder Frontend](https://github.com/lina98st/cocktail-finder)