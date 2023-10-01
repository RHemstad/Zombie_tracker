const ZombieTrackers = require('../models/zombieTrackersModel');

/* *************************** */
/**** GET ALL ZOMBIE TRACKERS ********* */

//http://localhost:3500/zombietrackers/
async function getAllZombieTrackers(req, res) {
    try {
        const results = await ZombieTrackers.findAll();
        res.status(200).json(results); //the request has succeeded
        if (!results) return res.status(204).json({ 'message': 'No zombieTracker found.' });
    } catch (error) {
        res.status(500).json({message: error}); //the server encountered an unexpected condition that prevented it from fulfilling the request
    }
};

module.exports = {getAllZombieTrackers}
