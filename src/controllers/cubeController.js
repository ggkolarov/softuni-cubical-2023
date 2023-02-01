// const Cube = require('../models/Cube_old');
const Cube = require('../models/Cube');
const db = require('../db.json');

exports.getCreateCube = (req, res) => { // named export
    res.render('create');
};

exports.postCreateCube = async (req, res) => {
    const {name, description, imageUrl, difficultyLevel} = req.body;
    //save cube
    let cube = new Cube({name, description, imageUrl, difficultyLevel}); // destruction
    
    await cube.save();
    //redirect
    res.redirect('/');
};

exports.getDetails = (req, res) => {
    let cubeId = Number(req.params.cubeId);

    if(!cubeId) {
        return res.redirect('/404');
    } 

    let cube = db.cubes.find(x => x.id == cubeId);

    if(!cube) {
        return res.redirect('/404'); // absolute path
    } 

    res.render('details', { cube });
};