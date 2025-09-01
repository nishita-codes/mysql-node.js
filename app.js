import mysql from "mysql2/promise";

// to connect to mysql server
const mysql_db = await mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"nishita.2016",
    // database:"",
});
console.log("mysql connect succesfully");

// we need to create database first
await mysql_db.execute(`create database if not exists mysql_db`);
console.log(await mysql_db.execute("show databases"));