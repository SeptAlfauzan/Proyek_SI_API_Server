const DB = require("../configs/DB");
const sequelize = require('sequelize');
const { DataTypes } = sequelize;

const Token = DB.define('token', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    refresh_token: {
        type: DataTypes.TEXT
    },
    user_id: {
        type: DataTypes.INTEGER
    },
    version: {
        type: DataTypes.BIGINT
    }
}, {
    freezeTableName: true
})

module.exports = Token;