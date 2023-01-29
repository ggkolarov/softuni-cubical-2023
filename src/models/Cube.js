const fs = require('fs');
const db = require('../db.json');
const path = require('path');

class Cube {
    constructor(name, description, imageUrl, difficultyLevel) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficultyLevel = difficultyLevel;
    }

    static save(cube) {
        cube.id = db.cubes[db.cubes.length - 1].id + 1; // generating the ids of the cubes
        db.cubes.push(cube); // db is object
        const jsonData = JSON.stringify(db, null, 2); // db to json
        fs.writeFileSync(path.resolve(__dirname, '../db.json'), jsonData);
    }
}

module.exports = Cube;