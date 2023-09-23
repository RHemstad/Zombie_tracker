const express = require("express");
const router = express.Router();
const zombieController = require("../controllers/zombieController");

router.get('/', zombieController.getAllZombies)


module.exports = router