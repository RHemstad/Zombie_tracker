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

async function oldaddRegisteredUser(req, res) {
    try {
        const user = req.body;
        const newUser = await Users.create(user);
        res.status(201).json(newUser);
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error})
    }
}
/* *********************** */
/* *** CLEANUP ADD A NEW USER ******** */
/* *********************** */

const addRegisteredUser = async (req, res) => {

//async function addRegisteredUser(req, res) {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ 'message': 'Username and password are required.' });

    //todo fix bug here
    const duplicate = await Users.findOne({where: { username: username }});
    if (duplicate) {
        return res.sendStatus(409); //Conflict user already exists
    }

    try {
        const hashedPwd = await bcrypt.hash(password, 10);
        const newUser = await Users.create({
        username: username,
        password: hashedPwd,
        roles: 2001,
        });

        console.log(newUser);
        res.status(201).json({'success': `New user created.`});

      } catch (error) {
       res.status(500).json({'message': error.message})
      }

}






module.exports = {getAllRegisteredUsers, addRegisteredUser}