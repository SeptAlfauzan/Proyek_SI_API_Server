const DB = require("../configs/DB");
const sequelize = require('sequelize');
const { DataTypes } = sequelize;

const Order = DB.define('orders', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    gadget_id: {
        type: DataTypes.INTEGER,
    },
    gadget: {
        type: DataTypes.TEXT,
    },
    complaint: {
        type: DataTypes.TEXT,
    },
    bill: {
        type: DataTypes.BIGINT,
    },
    user_id: {
        type: DataTypes.INTEGER,
    },
    patner_id: {
        type: DataTypes.INTEGER,
    },
    order_status_id: {
        type: DataTypes.INTEGER,
    },
    progress_id: {
        type: DataTypes.INTEGER,
    },
    confirmed: {
        type: DataTypes.BOOLEAN,
    },
    transaction_id: {
        type: DataTypes.BOOLEAN,
    },
    problem_category_id: {
        type: DataTypes.INTEGER,
    }

}, {
    freezeTableName: true
})

module.exports = Order;