// express framework integration
const express = require('express')

// parse request body to json
const body_parser = require('body-parser')

// for File input and output
const path = require('path')

// make mock database available globally
global.mock_db = path.join(__dirname, './data/mock_db.json');

const web_route = require('./routes/web');
const api_route = require('./routes/api');

const app = express();

// setting the view engine
app.set('view engine', 'pug');

app.use('/css', express.static('public/css'));
app.use('/js', express.static('public/js'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api_route); // API routes
app.use('/', web_route); // web routes

// redirect to home page if unknown name of pages requested
app.use((req, res) => {
    res.redirect('/');
});

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));