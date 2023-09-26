
const {Sequelize} = require('sequelize');

const connectToDb = new Sequelize('zombie_tracker', 'postgres', 'Bex2075', {
    host: 'localhost',
    dialect: 'postgres'
});

async function testConnection() {
    try {
        await connectToDb.authenticate()
        console.log('Connection has been established successfully.');
        return true;
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        return false;
    }
};

module.exports = {connectToDb, testConnection};
