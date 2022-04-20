const DB = require("../configs/DB");
const sequelize = require('sequelize');
const { DataTypes } = sequelize;

const NotifToken = DB.define('notification_token', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
    },
    token: {
        type: DataTypes.TEXT
    },
}, {
    freezeTableName: true
})

module.exports = NotifToken;