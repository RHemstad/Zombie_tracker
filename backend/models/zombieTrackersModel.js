//*** THE ZOMBIE TRACKERS USING THIS by firstname and last name */
//*** id, firstname, lastname */
//TODO - frontend is only getting username and password when registering
//TODO - need to add firstname and lastname to the form
//TODO - need to connect to user model?


const {DataTypes} = require('sequelize');
const {connectToDb} = require('../config/conn');

const ZombieTrackers = connectToDb.define('zombietracker', {

    zombietrackers_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    firstname: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

module.exports = ZombieTrackers
