const Users = require('../models/userModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const handleLogout = async (req, res) => {
    //todo delete accessToken on client
    const cookies = req.cookies;

    if (!cookies?.jwt) {
        return res.sendStatus(204); //server successfully processed the request, but is not returning any content
    };
    const refreshToken = cookies.jwt;

    //figure out if the refreshToken is in the database
    const foundUser = await Users.findOne({ where: {username: username.refreshToken }  });
    if (!foundUser) {
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
        return res.sendStatus(204); //server successfully processed the request, but is not returning any content
    }

    //delete this refreshToken from the database
    foundUser.refreshToken = '';
    const result = await foundUser.save();
    console.log(result);

    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
    res.sendStatus(204); //server successfully processed the request, but is not returning any content
}

module.exports = { handleLogout }