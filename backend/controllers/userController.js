//Get the data from the database
const Users = require('../models/userModel');

/* *************************** */
/* *** GET ALL USERS ********* */

//http://localhost:3500/users/
async function getAllUsers(req, res) {
    try {
        const results = await Users.findAll()
        res.status(200).json(results)
    } catch (error) {
        //console.log(error)
        res.status(500).json({message: error})
    }
};

/* *********************** */
/* *** ADD A USER ******** */
/* *********************** */

/*
    {
        "user_id": 1,
        "username": "Bexy",
        "password": "Bexy1234!",
        "created_at": "2023-09-24T19:59:40.734Z",
        "updated_at": "2023-09-24T19:59:40.734Z"
    },
*/

async function addUser(req, res) {
    try {
        const user = req.body;
        const newUser = await Users.create(user);
        res.status(201).json(newUser);
 
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error})
    }
}



module.exports = {getAllUsers, addUser}