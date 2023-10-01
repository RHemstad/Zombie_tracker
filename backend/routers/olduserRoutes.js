const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get('/', userController.getAllUsers);
router.get('/:user_id', userController.getUser);
router.post('/', userController.addUser);

module.exports = router