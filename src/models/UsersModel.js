const DB = require("../configs/DB");
const sequelize = require('sequelize');
const { DataTypes } = sequelize;

const User = DB.define('user', {
    name: {
        type: DataTypes.TEXT,
    },
    username: {
        type: DataTypes.STRING,
        length: 12,
        unique: true,
    },
    email: {
        type: DataTypes.TEXT,
        unique: true,
    },
    password: {
        type: DataTypes.TEXT
    },
    phone: {
        type: DataTypes.BIGINT
    },
    address: {
        type: DataTypes.TEXT
    },
    verificationCode: {
        type: DataTypes.INTEGER,
        length: 6,
    },
    verified: {
        type: DataTypes.BOOLEAN,
        length: 6,
    },
}, {
    freezeTableName: true
})

module.exports = User;