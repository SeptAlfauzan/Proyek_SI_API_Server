const mysql = require('mysql');
const sequelize = require('sequelize');
require('dotenv').config();
// use on development
// const DB_NAME = 'servisno';
// const DB_USER = 'root';
// const DB_PASSWORD = '';
// const DB_HOST = 'localhost';
// USE ON PRODUCTION
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB = new sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql',
    dialectModule: require('mysql2'),//uncomment when u try on your local machine
    port: process.env.DB_PORT
});

module.exports = DB;
