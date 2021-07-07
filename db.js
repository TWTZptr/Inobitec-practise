const Sequelize = require('sequelize');

module.exports = new Sequelize('network', 'postgres', 'admin', {
    port: '5432',
    logging: false,
    dialect: 'postgres',
    host: 'localhost'
});

