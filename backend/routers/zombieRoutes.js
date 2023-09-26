const express = require("express");
const router = express.Router();
const zombieController = require("../controllers/zombieController");

router.get('/', zombieController.getAllZombies);
router.post('/zombies', zombieController.addZombie);

module.exports = router