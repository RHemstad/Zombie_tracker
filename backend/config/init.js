const {connectToDB} = require("./conn");
const Users = require("../models/userModel");
const Zombies = require("../models/zombieModel");
const ZombieTrackers = require("../models/zombieTrackersModel");

async function initializeDB(){

try{
    await Zombies.drop(); //needs to come first because it looks at user
    await Users.drop();
    await ZombieTrackers.drop();

    await Users.sync();
    await Zombies.sync(); //needs to come second because it looks at user
    await ZombieTrackers.sync();

    console.log("The tables were successfully created");
    return true;

} catch (error) {
    console.error("the tables were not created, here is the error", error);
    return false;
}

}

initializeDB();