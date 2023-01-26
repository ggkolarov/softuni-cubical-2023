const handlebars = require('express-handlebars');

function setupViewEngine(app) { // getting 'app' as a reference
    app.engine('hbs', handlebars.engine({
        extname: 'hbs' // changing the default setting of searching main.handlebars in layouts folder
    }));
    app.set('view engine', 'hbs')
    app.set('views', './src/views') // seting 'views' folder to be not top level in the main project folder and changing the path to it
}

module.exports = setupViewEngine;