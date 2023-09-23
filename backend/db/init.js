const {connectToDB} = require("../models/conn")
const People = require("../models/userModel")
const Pet = require("../models/zombieModel")

async function initializeDB(){

try{
    await User.drop()
    await Zombie.drop()
    await Zombie.sync()
    await User.sync()
    console.log("The tables were successfully created")
    return true

} catch (error) {
    console.error("the tables were not created, here is the error" , error)
    return false
}

}

initializeDB()