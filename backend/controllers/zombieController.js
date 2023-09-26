//Get the data from the database
const Zombies = require('../models/zombieModel');

/* *************************** */
/**** GET ALL ZOMBIES ********* */

//http://localhost:3500/zombies/
async function getAllZombies(req, res) {
    try {
        const results = await Zombies.findAll()
        res.status(200).json(results)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error})
    }
};

/* *************************** */
/**** ADD A ZOMBIE ********* */

/*
    {
        "type": "Slow",
        "id": "US",
        "name": "United States",
        "value": 100,
        "notes": "these are notes affiliated with this zombie",
        "user_id": 1
    },
*/

async function addZombie(req, res) {
    try {
        const zombie = req.body;
        const newZombie = await Zombies.create(zombie);
        res.status(201).json(newZombie);
 
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error})
    }
}

module.exports = {getAllZombies, addZombie}