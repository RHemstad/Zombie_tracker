//Get the data from the database
const Users = require('../models/userModel');

/* *************************** */
/* *** GET ALL USERS ********* */
/* *********************** */

//http://localhost:3500/users/
async function getAllUsers(req, res) {
    try {
        const results = await Users.findAll()
        res.status(200).json(results)
    } catch (error) {
        res.status(204).json({message: error}); //no users found
    }
};

/* *********************** */
/* *** GET A USER ******** */
/* *********************** */
/* getting by id */
//todo fix bug here
async function getUser(req, res) {

    if (!req?.params?.user_id) return res.status(400).json({ "message": 'User ID required' });
    const user = await Users.findOne({where: { user_id: user_id }});
    if (!user) {
        return res.status(204).json({ 'message': `User ID ${req.params.user_id} not found` });
    }


    /*
    try {
        const user_id = req.params.user_id;
        const user = await Users.findByPk(user_id);
        res.status(200).json(user);

        if(user === null) {
            res.status(404).json({message: "Sorry, user not found"})
            return;
        }
        res.json({user_id: user.user_id});

    } catch (error) {
        res.status(500).json({message: error});
    }
    */
}


/* *********************** */
/* *** ADD A USER ******** */
/* *********************** */

/*
        "user_id": 3,
        "username": "Wilma",
        "password": "Wilma1234!"
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



module.exports = {getAllUsers, addUser, getUser}