const express = require('express');
const cocktailRouter = express.Router();

cocktailRouter.route('/')

.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the cocktails to you');
})
.post((req, res) => {
res.end(`Will add the cocktails: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
res.statusCode = 403;
res.end('PUT operation not supported on /cocktail');
})
.delete((req, res) => {
res.end('Deleting all cocktails');
});


cocktailRouter.route('/:cocktailId')

.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end(`Will send details of the cocktail: ${req.params.cocktailId} to you`);
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /cocktails/${req.params.cocktailId}`);
})
.put((req, res, next) => {
    res.write(`Updating the cocktail: ${req.params.cocktailId}\n`);
    res.end(`Will update the cocktail: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete((req, res, next) => {
    res.end(`Deleting cocktail: ${req.params.cocktailId}`);
});

module.exports = cocktailRouter;