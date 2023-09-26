const express = require("express");
const router = express.Router();

const registerController = require("../controllers/userController");

router.get('/', registerController.getAllUsers);
router.post('/users', registerController.addUser);


module.exports = router