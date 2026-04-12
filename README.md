# Cocktail Finder Backend

REST API for the CocktailFinder app built with Node.js, Express, and MongoDB.

## Setup

npm install
npm start

Uses nodemon for automatic server restarts during development.

## Endpoints

### Cocktails

GET /cocktails - get all cocktails (public)
GET /cocktails/:id - get a single cocktail (public)
POST /cocktails - add a new cocktail (requires admin)
PUT /cocktails/:id - update a cocktail (requires admin)
DELETE /cocktails/:id - delete a cocktail (requires admin)

### Users

POST /users/signup - register a new user
POST /users/login - login and receive a JWT token
GET /users/logout - logout

## Authentication

Authentication is implemented with Passport.js using Local Strategy and JWT (JSON Web Token). After login, a token is returned which must be sent as a Bearer Token in the Authorization header for protected routes.

Two permission levels exist:
- **User**: can log in and access protected routes
- **Admin**: required for creating, updating, and deleting cocktails

## Dependencies

- Express
- Morgan
- Mongoose
- Passport
- passport-local
- passport-local-mongoose
- passport-jwt
- jsonwebtoken
- Nodemon

## Related

- [Cocktail Finder Frontend](https://github.com/lina98st/cocktail-finder)