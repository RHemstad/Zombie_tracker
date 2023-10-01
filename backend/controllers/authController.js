const Users = require('../models/userModel');
const bcrypt = require('bcrypt');

const handleLogin = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ 'message': 'Username and password are required.' });
    const foundUser = await Users.findOne({ where: {username: username }  });
    if (!foundUser) return res.sendStatus(401); //Unauthorized (no user found)
    // evaluate password
    const match = await bcrypt.compare(password, foundUser.password);
    if (match) {
        //create JWTs
        res.json({'success': `User ${username} is logged in!` }); 
    } else {
        res.sendStatus(401).json({message: 'unauthorized user ' });
    }

   
}


module.exports = { handleLogin };