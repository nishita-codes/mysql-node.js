import mysql from "mysql2/promise";

// to connect to mysql server
const mysql_db = await mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"nishita.2016",
    database:"mysql_db",
});
console.log("mysql connect succesfully");

// we need to create database first
await mysql_db.execute(`create database if not exists mysql_db`);
console.log(await mysql_db.execute("show databases"));

// then we have to create a table
 await mysql_db.execute(`
    create table users (
    id int not null auto_increment primary key,
    username varchar(100) not null,
    email varchar(100) not null unique);
    `);

    // inserting data into table
 await mysql_db.execute(`
        insert into users(username,email) values('vinod','vinod@thapa1.com')
        `);

  
    // READ 
    const [rows] = await mysql_db.execute(`select * from users`);
    console.log(rows);


    // UPDATE
    try{
        const [rows] = await mysql_db.execute(`update users set username = "nishita" where email='vinod@thapa.com' ` );
        console.log("all users:" , rows);
    }catch(err){
        console.error(err);
     }



    // DELETE
    try{
        const [rows] = await mysql_db.execute(`Delete from users where email='vinod@thapa.com' ` );
        console.log("all users:" , rows);
     }catch(err){
     console.error(err);
     }

