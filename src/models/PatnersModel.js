const DB = require("../configs/DB");
const sequelize = require('sequelize');
const { DataTypes } = sequelize;

const Patner = DB.define('patner', {
    name: {
        type: DataTypes.TEXT,
    },
    photo: {
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
    lat: {
        type: DataTypes.TEXT
    },
    lng: {
        type: DataTypes.TEXT
    },
}, {
    freezeTableName: true
})

module.exports = Patner;