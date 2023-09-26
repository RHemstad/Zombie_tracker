//people table: id, owners name, age, location, pet id
//pet table: id, pet name, age, type

const {DataTypes} = require('sequelize')
const {connectToDb} = require('../config/conn');


const People = connectToDb.define('people', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    owner_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    location: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {timestamps: false})



module.exports = People