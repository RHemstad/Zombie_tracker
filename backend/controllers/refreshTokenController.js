const Users = require('../models/userModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const handleRefreshToken = async (req, res) => {
    const cookies = req.cookies;

    if (!cookies?.jwt) {
        return res.sendStatus(401);
    };
    const refreshToken = cookies.jwt;

    const foundUser = await Users.findOne({ where: {username: username.refreshToken }  });
    if (!foundUser) {
        return res.sendStatus(403); //Forbidden
    }

    //evaluate jwt
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (error, decoded) => {
            if (error || foundUser.username !== decoded.username) return res.sendStatus(403); //Forbidden
            const roles = foundUser.roles; 
            const accessToken = jwt.sign(
                   // { "username": decoded.username 
                        //roles goes here
                   // },

                   {
                    "UserInfo": {
                        "username": decoded.username,
                        "roles": roles
                    }
                   },
                    process.env.ACCESS_TOKEN_SECRET,
                    { expiresIn: '1d' } //expires in 60 seconds need to change
               );  
            res.json({ accessToken }); //add roles here
        });
    }

module.exports = { handleRefreshToken }