const {connectToDB} = require("../models/conn");
const User = require("../models/userModel");
const Zombie = require("../models/zombieModel");

async function initializeDB(){

try{
    await User.drop();
    await Zombie.drop();
    await User.sync();
    await Zombie.sync(); //needs to come second because it looks at user
    console.log("The tables were successfully created");
    return true;

} catch (error) {
    console.error("the tables were not created, here is the error" , error);
    return false;
}

}

initializeDB();