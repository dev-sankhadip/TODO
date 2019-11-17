import mysql from 'mysql'

const connection=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"angular-todo"
})

export{
    connection
}