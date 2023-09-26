//Get the data from the database
const Users = require('../models/userModel');

/* *************************** */
/* *** GET ALL REGISTERED USERS ********* */

//http://localhost:3500/register/
async function getAllRegisteredUsers(req, res) {
    try {
        const results = await Users.findAll()
        res.status(200).json(results)
    } catch (error) {
        res.status(500).json({message: error})
    }
};

/* *********************** */
/* *** ADD A REGISTERED USER ******** */
/* *********************** */

/*
        "user_id": 3,
        "username": "Wilma",
        "password": "Wilma1234!"
*/

async function addRegisteredUser(req, res) {
    try {
        const user = req.body;
        const newUser = await Users.create(user);
        res.status(201).json(newUser);
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error})
    }
}


module.exports = {getAllRegisteredUsers, addRegisteredUser}