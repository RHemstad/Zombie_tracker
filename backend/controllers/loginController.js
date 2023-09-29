const Users = require('../models/userModel');
//const bcrypt = require('bcrypt');

/* ******************************** */
/* *** AUTHENTICATE A USER ******** */
/* ******************************** */
/*
        "username": "Bexy",
        "password": "Bexy1234!"
*/
/* for postman check against localhost:3500/login */
async function handleLogin(req, res) {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ 'message': 'Username and password are required.' });
  
    const foundUser = await Users.findOne({ where: {username: username }  });
    //if (!foundUser) return res.sendStatus(401); //Unauthorized 

    //todo: check password

    if (foundUser) {
      res.status(200).json({message: 'found it' }); 
      //so we found the user now what?
      //need to give them a token or something to let them go to the dashboard etc
      //res.redirect?
    } else {
      //res.sendStatus(401).json({message: 'unauthorized user ' });
      res.status(401).json({message: 'unauthorized user ' });
    }
  
}

module.exports = { handleLogin };


