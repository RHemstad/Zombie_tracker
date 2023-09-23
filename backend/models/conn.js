//connect to the database
// CREATE DATABASE animal_lovers;

const {Sequelize} = require('sequelize')

//connect to the database
const connectToDb = new Sequelize('zombie_tracker', 'postgres', 'Bex2075', {
    host: 'localhost',
    dialect: 'postgres'
})

async function testConnection() {
    try {
        await connectToDb.authenticate()
        console.log('Connection has been established successfully.')
        return true
    } catch (error) {
        console.error('Unable to connect to the database:', error)
        return false
    }

}

module.exports = {connectToDb, testConnection}

