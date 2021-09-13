const express = require('express');
const path = require('path');

//Inicializacioness
const app = express();

//settings 
app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname +'views'));
//Middleware

app.use(express.urlencoded({extended: false}));

// Global variables

//router

app.get('/', (req, res) => {
    res.send('Hello word');
});

//Staticfiles
app.set(express.static(path.join(__dirname, 'public')));

module.exports = app;