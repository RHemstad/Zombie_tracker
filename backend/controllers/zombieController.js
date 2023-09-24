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

module.exports = {getAllZombies}