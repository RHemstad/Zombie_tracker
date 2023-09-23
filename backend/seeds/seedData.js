const zombiesList = require('./seedZombie')
const usersList = require('./seedUsers')
const Zombie = require('../models/zombieModel')
const User = require('../models/userModel')

async function addDataToDB(){
    await Zombie.bulkCreate(zombiesList)
    await User.bulkCreate(usersList)
}

addDataToDB()

