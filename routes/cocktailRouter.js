const express = require('express');
const Cocktail = require('../models/cocktail');
const authenticate = require('../authenticate');

const cocktailRouter = express.Router();

cocktailRouter.route('/')
.get((req, res, next) => {
Cocktail.find()
.then(cocktails => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(cocktails);
})
.catch(err => next(err));
})
    .post(authenticate.verifyUser, (req, res, next) => {
Cocktail.create(req.body)
.then(cocktail => {
    console.log('Cocktail Created ', cocktail);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(cocktail);
})
.catch(err => next(err));
})
.put(authenticate.verifyUser, (req, res, next) => {
res.statusCode = 403;
res.end('PUT operation not supported on /cocktails');
})
.delete(authenticate.verifyUser, (req, res, next) => {
Cocktail.deleteMany()
.then(response => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(response);
})
.catch(err => next(err));
});

cocktailRouter.route('/:cocktailId')
.get((req, res, next) => {
Cocktail.findById(req.params.cocktailId)
.then(cocktail => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(cocktail);
})
.catch(err => next(err));
})
    .post(authenticate.verifyUser, (req, res, next) => {
res.statusCode = 403;
res.end(`POST operation not supported on /cocktail/${req.params.cocktailId}`);
})
.put(authenticate.verifyUser, (req, res, next) => {
Cocktail.findByIdAndUpdate(req.params.cocktailId, {
    $set: req.body
}, { new: true })
.then(cocktail => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(cocktail);
})
.catch(err => next(err));
})
.delete(authenticate.verifyUser, (req, res, next) => {
Cocktail.findByIdAndDelete(req.params.cocktailId)
.then(response => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(response);
})
.catch(err => next(err));
});

module.exports = cocktailRouter;

