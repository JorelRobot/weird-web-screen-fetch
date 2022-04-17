const express = require('express');
const morgan = require('morgan');
const ejs = require('ejs');
const path = require('path');
const app = express();

//Settings

app.set('port', 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs');

// Middlewares

app.use(morgan('dev'));

// Global Variables

// Routes

app.use(require('./routes'));
app.use(require('./routes/screenfetch'));

// Public
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server

app.listen(app.get('port'), () => {
    console.log(`Server is running on port ${app.get('port')}`);
});

