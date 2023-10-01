const {DataTypes} = require('sequelize');
const {connectToDb} = require('../config/conn');

//TODO add refresh token to user model
//TODO add roles to user model

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
    },
    refreshToken: {
        type: DataTypes.STRING,
        allowNull: true
    },
    
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

