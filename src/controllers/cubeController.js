// const Cube = require('../models/Cube_old');
const Cube = require('../models/Cube');

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

exports.getDetails = async (req, res) => {
    const cube = await Cube.findById(req.params.cubeId).lean();

    if(!cube) {
        return res.redirect('/404'); // absolute path
    } 

    res.render('details', { cube });
};