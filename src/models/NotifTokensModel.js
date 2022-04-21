const DB = require("../configs/DB");
const sequelize = require('sequelize');
const { DataTypes } = sequelize;

const NotifToken = DB.define('notification_token', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    username: {
        type: DataTypes.TEXT,
    },
    token: {
        type: DataTypes.TEXT
    },
}, {
    freezeTableName: true
})

module.exports = NotifToken;