
const {DataTypes} = require('sequelize');
const {connectToDb} = require('../config/conn');
const User = require('./userModel');

const Zombie = connectToDb.define('zombie', {
    zombie_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    type: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    /* refers to country code */
    /* needed for map */
    id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    /* refers to country location of zombie */
    /* needed for map */
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    /* not sure at this point need to refine */
    /* has to do with the map */
    value: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    /* notes about the zombie */
    notes: {
        type: DataTypes.STRING(5000),
        allowNull: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'users',
            key: 'user_id'
        }
    },
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});


Zombie.belongsTo(User, {
foreignKey: 'user_id'
   //onDelete: 'CASCADE',
   //onUpdate: 'CASCADE'
})


module.exports = Zombie