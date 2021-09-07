const Sequelize = require('sequelize');
require('dotenv').config();

const dbName = process.env.DB_NAME;
const dbPassword = process.env.DB_PASSWORD;
const dbPort = process.env.DB_PORT;
const dbLogin = process.env.DB_LOGIN;

module.exports = new Sequelize(dbName, dbLogin, dbPassword, {
    port: dbPort,
    logging: false,
    dialect: 'postgres',
    host: 'localhost',
    define: {
        timestamps: false
    }
});