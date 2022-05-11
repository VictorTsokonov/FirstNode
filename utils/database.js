const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node-complete',
    password:'D$B4se',
    port:3306
})

module.exports = pool.promise();