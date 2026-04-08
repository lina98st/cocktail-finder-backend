const express = require('express');
const morgan = require('morgan');
const cocktailRouter = require('./routes/cocktailRouter');
const userRouter = require('./routes/userRouter');
const passport = require('passport');
const authenticate = require('./authenticate');

const hostname = 'localhost';
const port = 3000;

const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/cocktailfinder';
const connect = mongoose.connect(url, {});

connect.then(() => console.log('Connected correctly to server'),
err => console.log(err)
);

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

app.use('/cocktails', cocktailRouter);
app.use('/users', userRouter);

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
 
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});