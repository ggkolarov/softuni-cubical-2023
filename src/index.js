const express = require('express');

//initiate express framework
const app = express();
// Port env setup
const config = require('./config');
// Express-handlebars setup
// First version of getting the code from viewEngine
const setupViewEngine = require('./config/viewEngine');

setupViewEngine(app);

/*
--------------------------------
// Second version
require('./config/viewEngine')(app);
-------------------------------- 
*/

app.get('/', (req, res) => {
    // res.send('Home page'); // starting normally
    // res.render('home', {layouts: false}); // starting with express
    res.render('home'); // starting with express
});

app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}......`));