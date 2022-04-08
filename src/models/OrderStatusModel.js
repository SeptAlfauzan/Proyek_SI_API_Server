const DB = require("../configs/DB");
const sequelize = require('sequelize');
const { DataTypes } = sequelize;

const OrderStatus = DB.define('order_status', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.TEXT,
    }

}, {
    freezeTableName: true
})

module.exports = OrderStatus;