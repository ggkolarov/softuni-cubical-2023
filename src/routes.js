// one line
const router = require('express').Router();

/* three lines
const express = require('express');
const Router = express.Router;
const router = Router(); */

const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');


// Home page
router.get('/', homeController.getHomePage);
// About page
router.get('/about', homeController.getAboutPage);
// Create page
router.get('/404', homeController.getErrorPage);

router.get('/create', cubeController.getCreateCube); // controllers usage

router.post('/create', cubeController.postCreateCube);

router.get('/details/:cubeId', cubeController.getDetails);


module.exports = router;