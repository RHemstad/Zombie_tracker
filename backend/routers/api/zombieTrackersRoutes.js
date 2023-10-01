const express = require("express");
const router = express.Router();
const zombieTrackersController = require("../../controllers/zombieTrackersController");
const ROLES_LIST = require("../../config/roles_list");
const verifyRoles = require("../../middleware/verifyRoles");


router.get('/', zombieTrackersController.getAllZombieTrackers);
//future roles need to include verifyRoles 
//TODO: add a post route for adding a zombie tracker





module.exports = router