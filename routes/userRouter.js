const express = require('express');
const userRouter = express.Router();

userRouter.route('/')

.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
res.statusCode = 403;
res.end('GET operation not supported on /users');
})
.post((req, res) => {
res.end(`Will add the users: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
res.statusCode = 403;
res.end('PUT operation not supported on /users');
})
.delete((req, res) => {
res.statusCode = 403;
res.end('DELETE operation not supported on /users');
});


userRouter.route('/login')

.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
res.statusCode = 403;
res.end('GET operation not supported on /login');
})
.post((req, res, next) => {
res.end(`Will login user and return a token`);
})
.put((req, res, next) => {
res.statusCode = 403;
res.end('PUT operation not supported on /users');
})
.delete((req, res, next) => {
res.statusCode = 403;
res.end('DELETE operation not supported on /users');
});

module.exports = userRouter;