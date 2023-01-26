const express = require('express');
const handlebars = require('express-handlebars');

const config = require('./config');

const app = express();

app.engine('hbs', handlebars.engine({
    extname: 'hbs' // changing the default setting of searching main.handlebars in layouts folder
}));
app.set('view engine', 'hbs')
app.set('views', './src/views') // seting 'views' folder to be not top level in the main project folder and changing the path to it
app.get('/', (req, res) => {
    // res.send('Home page'); // starting normally
    // res.render('home', {layouts: false}); // starting with express
    res.render('home'); // starting with express
});

app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}......`));