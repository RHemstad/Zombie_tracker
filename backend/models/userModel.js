/*
REGISTER TABLE
Users Table:
user_id (Primary key)
username
password (hashed and salted)
roles
created_at
updated_at
*/

//const { hooks } = require('./user-role.hook');
const {DataTypes} = require('sequelize');
const {connectToDb} = require('../config/conn');

const User = connectToDb.define('user', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    //role_id: {
    //    type: DataTypes.INTEGER,
    //    primaryKey: true,
    //    allowNull: true  //todo change to false when roles set up
   // },

    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    //hooks
});

/* TO DO SET UP USER ROLES */
/* Will need to create a userroles table to associate users with roles */
/*

table userroles {
    RoleId: ID!
    UserId: ID!
    role: roles
  }

type roles {
    Id: ID!
    Name: String!
  }



User.associate = users => {
    user.belongsToMany(users.Role, {
        hooks: true,
        through: 'userroles'
    })
};
*/




module.exports = User

