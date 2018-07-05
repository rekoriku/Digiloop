const mysql = require('mysql2/promise');
const db = require('./db');
let pool = mysql.createPool(db);

var connection = async (query, values) => {
    try {
        let [rows, fields] = await pool.query(query,values);
        return rows;
    } catch (error) {
        console.log(error)
        pool.end();
    }
};

module.exports = connection;
