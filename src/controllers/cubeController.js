// const Cube = require('../models/Cube_old');
const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');
const cubeService = require('../service/cubeService');
const cubeUtils = require('../utils/cubeUtils')

exports.getCreateCube = (req, res) => { // named export
    console.log(req.user);
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
    const cube = await Cube.findById(req.params.cubeId).populate('accessories').lean();

    if(!cube) {
        return res.redirect('/404'); // absolute path
    } 

    res.render('cube/details', { cube });
};

exports.getAttachAccessory = async (req, res) => {
    const cube = await Cube.findById(req.params.cubeId).lean();
    const accessories = await Accessory.find({ _id: {$nin: cube.accessories}}).lean()

    res.render('cube/attach', { cube, accessories }) // podavane kum tepleita attach.hbs
};

exports.postAttachAccessory = async (req, res) => { // connecting a given cube with a specific accessory
    const cube = await Cube.findById(req.params.cubeId);
    const accessoryId = req.body.accessory;
    cube.accessories.push(accessoryId);

    await cube.save();
    res.redirect(`/cubes/${cube._id}/details`)
};

exports.getEditCube = async (req, res) => {
    const cube = await cubeService.getOne(req.params.cubeId).lean();
    const difficultyLevels = cubeUtils.generateDifficultyLevels(cube.difficultyLevel);

    res.render('cube/edit', { cube, difficultyLevels });
};

exports.getDeleteCube = async (req, res) => {
    const cube = await cubeService.getOne(req.params.cubeId).lean();

    res.render('cube/delete', { cube: cube })
};