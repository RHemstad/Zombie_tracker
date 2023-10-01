const express = require("express");
const router = express.Router();
const zombieTrackersController = require("../../controllers/zombieTrackersController");



router.get('/', zombieTrackersController.getAllZombieTrackers);




module.exports = router