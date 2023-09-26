const express = require('express')
const router = express.Router()
const peepsController = require('../controllers/peopleController')

router.get('/', peepsController.getAllPeople)
router.post('/', peepsController.addPerson)
module.exports = router