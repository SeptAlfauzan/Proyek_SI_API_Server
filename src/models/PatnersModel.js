const DB = require("../configs/DB");
const sequelize = require('sequelize');
const { DataTypes } = sequelize;

const Patner = DB.define('patner', {
    name: {
        type: DataTypes.TEXT,
    },
    username: {
        type: DataTypes.STRING,
        length: 12,
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
}, {
    freezeTableName: true
})

module.exports = Patner;