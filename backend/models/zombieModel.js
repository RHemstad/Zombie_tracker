/*

Zombies Table:
zombie_id (Primary key)
name: "Zombie A"
type: "slow"
location spotted: "City A" //Map with animated bubbles
created_at
updated_at
user_id (Foreign key)
image_url (or a reference to the image location)?
*/

const {DataTypes} = require('sequelize');
const {connectToDb} = require('../config/conn');
//const User = require('./userModel')

const Zombie = connectToDb.define('zombie', {
    zombie_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }

    //name - ie: fast/slow/smart

    /*
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    }
    */
    


}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

/*
Zombie.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE', 
    onUpdate: 'CASCADE'
})
*/

module.exports = Zombie