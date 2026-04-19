# Cocktail Finder Backend

REST API for the CocktailFinder app built with Node.js, Express, and MongoDB.

## Setup

npm install
npm start

Uses nodemon for automatic server restarts during development.

The server runs on HTTP (port 3000) and HTTPS (port 3443). All HTTP requests are automatically redirected to HTTPS.

## Endpoints

### Cocktails

GET /cocktails - get all cocktails (public)
GET /cocktails/:id - get a single cocktail (public)
POST /cocktails - add a new cocktail (requires admin)
PUT /cocktails/:id - update a cocktail (requires admin)
DELETE /cocktails/:id - delete a cocktail (requires admin)

### Users

GET /users - get all users (requires admin)
POST /users/signup - register a new user
POST /users/login - login and receive a JWT token
GET /users/logout - logout
GET /users/google - initiate Google OAuth login
GET /users/google/callback - Google OAuth callback, returns JWT token

## Authentication

Authentication is implemented with Passport.js using Local Strategy, JWT (JSON Web Token), and Google OAuth 2.0. After login, a token is returned which must be sent as a Bearer Token in the Authorization header for protected routes.

Two permission levels exist:
- **User**: can log in and access protected routes
- **Admin**: required for creating, updating, and deleting cocktails

## HTTPS

The server uses HTTPS with a self-signed certificate generated via OpenSSL. For local development, you may need to accept the browser security warning for localhost.

## CORS

CORS is enabled to allow cross-origin requests. The following origins are whitelisted: http://localhost:3000, https://localhost:3443, and https://cocktailfinder-alina.netlify.app.

## Dependencies

- Express
- Morgan
- Mongoose
- Passport
- passport-local
- passport-local-mongoose
- passport-jwt
- passport-google-oauth20
- jsonwebtoken
- cors
- Nodemon

## Related

- [Cocktail Finder Frontend](https://github.com/lina98st/cocktail-finder)