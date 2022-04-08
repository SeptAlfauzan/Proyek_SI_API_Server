const DB = require("../configs/DB");
const sequelize = require('sequelize');
const { DataTypes } = sequelize;

const Review = DB.define('review', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
    },
    patner_id: {
        type: DataTypes.INTEGER,
    },
    description: {
        type: DataTypes.TEXT,
    },
    rating: {
        type: DataTypes.FLOAT,
    },

}, {
    freezeTableName: true
})

module.exports = Review;