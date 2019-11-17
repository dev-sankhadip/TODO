import express from 'express'
import { connection } from '../db/db'
import { checkToken } from '../security/jwt'


const userController=express.Router();

userController.post('/login', (request, response)=>
{
  console.log(request.body);
})



export {
  userController
}