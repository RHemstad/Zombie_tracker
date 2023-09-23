const express = require("express");
const router = express.Router();
const registerUserController = require("../controllers/registerUserController");

router.get('/', registerUserController.getAllRegisteredUsers);
module.exports = router;