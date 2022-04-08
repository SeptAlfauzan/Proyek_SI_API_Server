const DB = require("../configs/DB");
const sequelize = require('sequelize');
const { DataTypes } = sequelize;

const ProblemCategory = DB.define('problem_category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.TEXT,
    },
    description: {
        type: DataTypes.TEXT,
    },

}, {
    freezeTableName: true
})

module.exports = ProblemCategory;