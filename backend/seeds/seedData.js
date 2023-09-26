const usersList = require('./seedUsers');
const User = require('../models/userModel');
const zombiesList = require('./seedZombies');
const Zombie = require('../models/zombieModel');

const People = require('../models/peopleModel')
const peopleList = require('./seedPeople')

async function addDataToDB(){
    await User.bulkCreate(usersList);
    await Zombie.bulkCreate(zombiesList);

    await People.bulkCreate(peopleList)
}

addDataToDB()

