const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD
    }
);

class DB {
    static checkConnection = () => {
        connection.connect((err) => {
            if (err) return console.log(err.stack);
            console.log(`success to connect database, connected as id ${connection.threadId}`);
        });
    }
    static getAlldata = (tableName) => {
        connection.query({
            sql: `SELECT * FROM ${tableName}`
        }, (err, result, fields) => {
            if (err) throw err;
            // change code bellow as your expected result
            console.log(result)
        })
    }
    static insertTo = (data, tableName) => {
        connection.query({
            sql: `insert into ${tableName} set ?`,
            values: data
        }, (err, result, fields) => {
            if (err) throw err;
            console.log(fields)
        })
    }
}


DB.checkConnection();

connection.end();