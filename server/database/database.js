const pass = require('../../sensitive.js')
const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'http://database-ihbo.crmajtggct83.us-east-2.rds.amazonaws.com/',
    user: `${process.env.USER}`,
    password: `${process.env.PASSWORD}`,
    database: 'database-ihbo',
    port: process.env.PORT
})

con.connect( err => {
    if (err) {
        console.error(err);
    }
    console.log('Connected to RDS MySQL database!');
});

const userNames_passwords = (data, callback) => {
    const queryString = "SELECT userNames, passwords FROM Users";
    con.query(queryString, (err,data) => {
        if (err) {
            console.log(err, "Error getting userNames and passwords");
        };
        callback(null, data);
    });
};






module.exports = {con};