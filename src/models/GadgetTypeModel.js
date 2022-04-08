const DB = require("../configs/DB");
const sequelize = require('sequelize');
const { DataTypes } = sequelize;

const GadgetType = DB.define('gadget_type', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.TEXT
    },
    description: {
        type: DataTypes.TEXT
    }

}, {
    freezeTableName: true
})

module.exports = GadgetType;