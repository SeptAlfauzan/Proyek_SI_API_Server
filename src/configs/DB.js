const mysql = require('mysql');
const sequelize = require('sequelize');
require('dotenv').config();

const DB_NAME = 'test';
const DB_USER = 'root';
const DB_PASSWORD = '';

const DB = new sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});

// class DB {
//     connection = mysql.createConnection(
//         {
//             // PRODUCTION
//             // host: process.env.DB_HOST,
//             // user: process.env.DB_USER,
//             // database: process.env.DB_NAME,
//             // password: process.env.DB_PASSWORD
//             host: 'localhost',
//             user: 'root',
//             database: 'test',
//             password: ''
//         }
//     );

//     static checkConnection = () => {
//         new DB().connection.connect((err) => {
//             if (err) return console.log(err.stack);
//             console.log(`success to connect database, connected as id ${new DB().connection.threadId}`);
//         });
//     }
// }

module.exports = DB;