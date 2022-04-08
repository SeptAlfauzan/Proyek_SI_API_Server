const DB = require("../configs/DB");
const sequelize = require('sequelize');
const { DataTypes } = sequelize;

const Gadget = DB.define('gadget', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    owner_id: {
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.TEXT
    },
    gadget_type_id: {
        type: DataTypes.INTEGER
    }

}, {
    freezeTableName: true
})

module.exports = Gadget;