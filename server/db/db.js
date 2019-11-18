import mysql from 'mysql'
require('dotenv').config();

const connection=mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD ,
    database:process.env.DB
})

export{
    connection
}