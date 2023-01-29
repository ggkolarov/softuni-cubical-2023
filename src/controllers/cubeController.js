const Cube = require('../models/Cube');

exports.getCreateCube = (req, res) => { // named export
    res.render('create');
};

exports.postCreateCube = (req, res) => {
    const {name, description, imageUrl, difficultyLevel} = req.body;
    //save cube
    let cube = new Cube(name, description, imageUrl, difficultyLevel); // destruction
    
    Cube.save(cube);
    //redirect
    res.redirect('/');
}