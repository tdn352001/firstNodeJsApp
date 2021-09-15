const express = require('express');
const handlebar  = require('express-handlebars');
const morgan = require('morgan');
const routes = require('./routes')
const db = require('./config/db/index')

const app = express();
const path = require('path');
const port = 3000;

// render view
app.use(express.static(path.join(__dirname, 'public')))


app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

//HTTP Logger
app.use(morgan('combined'))

//Template engine
app.engine('hbs', handlebar({
    extname: '.hbs', 
    helpers: {
        sum: function (a, b) { return a + b; },
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'))

// Navigation
routes(app);

// connect db
db.connect()

app.listen(port);