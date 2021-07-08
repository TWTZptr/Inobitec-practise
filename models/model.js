const sequelize = require('../db');
const Sequelize = require('sequelize');

module.exports = sequelize.define('network', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    parent_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ip: {
        type: Sequelize.STRING,
        allowNull: false
    },
    port: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

