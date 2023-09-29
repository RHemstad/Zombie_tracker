//Get the data from the database
const Users = require('../models/userModel');
const bcrypt = require('bcrypt');

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
/* *** ADD A NEW USER ******** */
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



/* *************************************** */
/* *** UPDATED TO HANDLE NEW USER ******** */
/* *************************************** */

async function handleNewUser(req, res) {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ 'message': 'Username and password are required.' });

    // check for duplicate usernames in the db
    const duplicate = await User.findOne({ username: username }).exec();
    if (duplicate) return res.sendStatus(409); //Conflict 

    try {
        //encrypt the password
        const hashedPwd = await bcrypt.hash(password, 10);

        //create and store the new user
        const result = await User.create({
            "username": username,
            "password": hashedPwd
        });

        console.log(result);

        res.status(201).json({ 'success': `New user ${username} created!` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}




module.exports = {getAllRegisteredUsers, addRegisteredUser, handleNewUser}