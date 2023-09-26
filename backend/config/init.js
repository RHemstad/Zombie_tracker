const {connectToDB} = require("./conn");
const User = require("../models/userModel");
const Zombie = require("../models/zombieModel");

async function initializeDB(){
    try{
        await Zombie.drop();
        await Zombie.sync(); //needs to come first because it looks at user
        await User.drop();
        await User.sync();
        console.log("The tables were successfully created");
        return true;

    } catch (error) {
        console.error("the tables were not created, here is the error", error);
        return false;
    }
}

initializeDB();