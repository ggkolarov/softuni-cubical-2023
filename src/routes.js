const cubeController = require('./controllers/cubeController');

// one line
const router = require('express').Router();

// three lines
// const express = require('express');
// const Router = express.Router;
// const router = Router();

// Home page
router.get('/', (req, res) => {
    // res.send('Home page'); // starting normally
    // res.render('home', {layouts: false}); // starting with express
    res.render('index'); // starting with express
});

// About page
router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/create', cubeController.getCreateCube); // controllers usage

module.exports = router;