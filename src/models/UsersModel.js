const DB = require("../configs/DB");
const sequelize = require('sequelize');
const { DataTypes } = sequelize;

const User = DB.define('user', {
    username: {
        type: DataTypes.STRING,
        length: 12,
    },
    password: {
        type: DataTypes.TEXT
    }
}, {
    freezeTableName: true
})

module.exports = User;