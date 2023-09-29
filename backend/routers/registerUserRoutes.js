const express = require("express");
const router = express.Router();
const registerUserController = require("../controllers/registerUserController");

router.get('/', registerUserController.getAllRegisteredUsers);
router.post('/', registerUserController.addRegisteredUser);
//router.post('/', registerUserController.handleNewUser);

module.exports = router;