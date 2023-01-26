const express = require('express');

//initiate express framework
const app = express();
// Port env setup
const config = require('./config');
// Express-handlebars setup
// First version of getting the code from viewEngine
const setupViewEngine = require('./config/viewEngine');
const cubeController = require('./controllers/cubeController');

setupViewEngine(app);

/*
--------------------------------
// Second version
require('./config/viewEngine')(app);
-------------------------------- 
*/

// Home page
app.get('/', (req, res) => {
    // res.send('Home page'); // starting normally
    // res.render('home', {layouts: false}); // starting with express
    res.render('index'); // starting with express
});

// About page
app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/create', cubeController.getCreateCube);

// setting the static files / getting the css files, images and etc.
app.use(express.static('src/public'));

// Starting the server
app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}......`));