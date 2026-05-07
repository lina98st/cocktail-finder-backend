const express = require('express');
const Favorite = require('../models/favorite');
const authenticate = require('../authenticate');
const cors = require('./cors');

const favoriteRouter = express.Router();

favoriteRouter.route('/')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, authenticate.verifyUser, (req, res, next) => {
Favorite.findOne({ user: req.user._id })
    .populate('cocktails')
        .populate('user')
.then(favorites => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(favorites);
})
.catch(err => next(err));
}) 
.post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    Favorite.findOne({ user: req.user._id })
.then(favorites => {
if (favorites) { 
req.body.forEach(cocktail => {
    if (!favorites.cocktails.includes(cocktail._id)) {
        favorites.cocktails.push(cocktail._id);
        
    }
});
favorites.save()
.then(favorites => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(favorites);
})
.catch(err => next(err));
} else { 
    const favorite = new Favorite({ user: req.user._id, cocktails: [] });
    req.body.forEach(cocktail => favorite.cocktails.push(cocktail._id));
    favorite.save()
    .then(favorite => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(favorite);
})
.catch(err => next(err));
        }
    })
    .catch(err => next(err));
})
.put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported on /favorites/`);
})
.delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
        Favorite.findOneAndDelete({ user: req.user._id }) 
.then(favorites => {
if (favorites) { 
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(favorites);
}
else { 
res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
res.end('You do not have any favorites to delete.')
}
})
.catch(err => next(err));
});

favoriteRouter.route('/:cocktailId')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 403;
res.end(`GET operation not supported on /favorites/${req.params.cocktailId}`);
})

.post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    Favorite.findOne({ user: req.user._id })
    .then(favorites => {

        if (favorites) {

if (favorites.cocktails.includes(req.params.cocktailId)) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    return res.end('That cocktail is already in the list of favorites!');
}
   favorites.cocktails.push(req.params.cocktailId);
   return favorites.save();
} else {

    const favorite = new Favorite({
        user: req.user._id,
        cocktails: [req.params.cocktailId]
    });
    return favorite.save();
    }
      })
.then(result => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(result);
    })
    .catch(err => next(err));
})
.put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 403;
    res.setHeader('Content-Type', 'text/plain');
res.end(`PUT operation not supported on /favorites/${req.params.cocktailId}`);
})
.delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
Favorite.findOne({ user: req.user._id })
.then(favorites => {
    if (!favorites) {
        res.setHeader('Content-Type', 'text/plain');
        return res.end('You do not have any favorites.')
    }

    const index = favorites.cocktails.indexOf(req.params.cocktailId);
favorites.cocktails.splice(index, 1);

    return favorites.save();
})
.then(result => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(result);
})
    .catch(err => next(err));
});

module.exports = favoriteRouter;

