const express = require('express');

const routes = require('./routes')
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
require('./config/viewEngine')(app); not recommended
-------------------------------- 
*/

// setting the static files / getting the css files, images and etc.
app.use(express.static('src/public'));
app.use(routes);

// Starting the server
app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}......`));