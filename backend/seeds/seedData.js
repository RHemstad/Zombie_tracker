const usersList = require('./seedUsers');
const User = require('../models/userModel');
const zombiesList = require('./seedZombies');
const Zombie = require('../models/zombieModel');

async function addDataToDB(){
    await User.bulkCreate(usersList);
    await Zombie.bulkCreate(zombiesList);
}

addDataToDB()

