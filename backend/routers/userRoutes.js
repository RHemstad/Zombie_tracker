const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get('/', userController.getAllUsers);
//router.get('/users/:user_id', userController.getUser);
//router.post('/users', peepsController.addPerson)


module.exports = router