import express from 'express'
import { connection } from '../db/db'
import { checkToken } from '../security/jwt'
import shortid from 'shortid'
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'

const userController=express.Router();

userController.use(cookieParser());

userController.post('/login', (request, response)=>
{
  const { email, password }=request.body;
  var loginSqlQuery="select * from info where email = ? and password = ?";
  connection.query(loginSqlQuery,[email, password],(err, result)=>
  {
    if(err)
    {
      console.log(err);
      response.status(500).send({ code:500 })
    }
    if(result.length>0)
    {
      let token = jwt.sign({email: email},
        process.env.SECRET,
        { 
          expiresIn: '1h' //expires in 24 hours
        }
      )
      const id=result[0].id;
      response.cookie('token',token, { maxAge: 9000000, httpOnly: true });
      response.status(200).send({ code:200, token, id });
    }
    else
    {
      response.status(400).send({ code:400, message:"User not found" });
    }
  })
})


userController.post('/signup',(request, response)=>
{
  const { email, password }=request.body;
  const id=shortid.generate();
  var signupSqlQuery="insert into info(id, email, password) values(?,?,?)";
  connection.query(signupSqlQuery,[id, email, password],(err, result)=>
  {
    if(err)
    {
      console.log(err);
      response.status(500).send({ code:500 })
    }
    else
    {
      response.status(201).send({ code:201, message:"User Registerd Successfully" })
    }
  })
})



export {
  userController
}