const express = require('express');
const morgan = require('morgan');
const cocktailRouter = require('./routes/cocktailRouter');
const userRouter = require('./routes/userRouter');
const passport = require('passport');
const authenticate = require('./authenticate');
const config = require('./config');
const favoriteRouter = require('./routes/favoriteRouter');

const mongoose = require('mongoose');

const url = config.mongoUrl;
const connect = mongoose.connect(url, {});

connect.then(() => console.log('Connected correctly to server'),
err => console.log(err)
);

const app = express();

app.all('/{*path}', (req, res, next) => {
  if (req.secure) {
    return next();
  } else {
    console.log(`Redirecting to: https://${req.hostname}:${app.get('secPort')}${req.url}`);
  res.redirect(301, `https://${req.hostname}:${app.get('secPort')}${req.url}`);
  }
})

app.use(morgan('dev'));
app.use(express.json());

app.use(passport.initialize());
//app.use(passport.session());

app.use('/cocktails', cocktailRouter);
app.use('/users', userRouter);
app.use('/favorites', favoriteRouter);

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
 
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

module.exports = app;