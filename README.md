# Cocktail Finder Backend

RESTful API for the Cocktail Finder application, built with Node.js, Express, and MongoDB.

## Getting Started

```bash
npm install
npm start
```

The server runs on HTTP (port 3000) and HTTPS (port 3443). All HTTP traffic is automatically redirected to HTTPS. Nodemon is used for automatic server restarts during development.

## API Endpoints

### Cocktails

| Method | Endpoint | Access |
|--------|----------|--------|
| GET | /cocktails | Public |
| GET | /cocktails/:id | Public |
| POST | /cocktails | Admin only |
| PUT | /cocktails/:id | Admin only |
| DELETE | /cocktails/:id | Admin only |

### Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /users | Admin only |
| POST | /users/signup | Register a new user |
| POST | /users/login | Login and receive a JWT token |
| GET | /users/logout | Logout |
| GET | /users/google | Initiate Google OAuth login |
| GET | /users/google/callback | Google OAuth callback, returns JWT token |

## Authentication

Authentication is handled via Passport.js with the following strategies:

- **Local Strategy** for username and password login
- **JWT** for protecting routes after login
- **Google OAuth 2.0** for third-party authentication

After a successful login, a Bearer Token is returned and must be included in the `Authorization` header for all protected routes.

Two permission levels are supported:

- **User** — can log in and access protected routes
- **Admin** — required for creating, updating, and deleting cocktails

## Security

- HTTPS is enabled using a self-signed certificate generated via OpenSSL. When running locally, you may need to accept the browser security warning for localhost.
- CORS is configured to allow requests from the following origins:
  - `http://localhost:3000`
  - `https://localhost:3443`
  - `https://cocktailfinder-alina.netlify.app`

## Dependencies

- express
- morgan
- mongoose
- passport
- passport-local
- passport-local-mongoose
- passport-jwt
- passport-google-oauth20
- jsonwebtoken
- cors
- nodemon

## Related

- [Cocktail Finder Frontend](https://github.com/lina98st/cocktail-finder)