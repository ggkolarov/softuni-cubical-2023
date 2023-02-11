const express = require('express');
const cookieParser = require('cookie-parser');

const routes = require('./routes');
// Port env setup
const config = require('./config');
const authMiddleware = require('./middlewares/authMiddleware');
// Express-handlebars setup
// First version of getting the code from viewEngine
const setupViewEngine = require('./config/viewEngine');
const initDatabase = require('./config/databaseInit');

/*
--------------------------------
// Second version
require('./config/viewEngine')(app); not recommended
-------------------------------- 
*/

//initiate express framework
const app = express();
setupViewEngine(app);

// setting the static files / getting the css files, images and etc.
app.use(express.static('src/public'));
app.use(cookieParser());
app.use(express.urlencoded({extended: false})); //middleware
app.use(authMiddleware.authentication);
app.use(routes);

// Starting the server

initDatabase()
    .then(() => app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}......`)))
    .catch((err) => console.error(err));
