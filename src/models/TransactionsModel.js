const DB = require("../configs/DB");
const sequelize = require('sequelize');
const { DataTypes } = sequelize;

const Transaction = DB.define('transaction', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    amount: {
        type: DataTypes.BIGINT,
    },
    user_id: {
        type: DataTypes.INTEGER,
    },
    patner_id: {
        type: DataTypes.INTEGER,
    },
    order_id: {
        type: DataTypes.INTEGER,
    },

}, {
    freezeTableName: true
})

module.exports = Transaction;