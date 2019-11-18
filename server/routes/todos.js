import express from 'express'
import shortid from 'shortid'
import { checkToken } from '../security/jwt';
import { connection } from '../db/db'

const todoController=express.Router();


todoController.post('/add',checkToken, function(request, response)
{
  const { email }=request.decoded;
  const { todo }=request.body;
  const id=shortid.generate();
  const time=new Date().toLocaleTimeString()+" "+new Date().toLocaleDateString();
  var todosInsertSqlQuery="insert into todos(id, email, todos, time) values(?,?,?,?)";
  connection.query(todosInsertSqlQuery,[id,email, todo, time],(err, result)=>
  {
    if(err)
    {
      console.log(err);
      response.status(500).send({ code:500, message:"Internal error" })
    }
    response.status(201).send({ code:201, message:"Todos created", id, todo });
  })
})

todoController.get('/alltodo',checkToken, function(request, response)
{
  const { email }=request.decoded;
  var getAllTodoSqlQuery="select * from todos where email = ?";
  connection.query(getAllTodoSqlQuery,[email], function(err, result)
  {
    if(err)
    {
      console.log(err);
      response.status(500).send({ code:500, message:"Internal error" })
    }
    response.status(200).send({ code:200, result })
  })
})


todoController.delete('/delete/:id',checkToken, function(request, response)
{
  const { email }=request.decoded;
  const { id }=request.params;
  console.log(id);
  var todoDeleteSqlQuery="delete from todos where id = ? and email = ?";
  connection.query(todoDeleteSqlQuery,[id, email], function(err, result)
  {
    if(err)
    {
      console.log(err);
      response.status(500).send({ code:500, message:"Internal error" })
    }
    response.status(202).send({ code:202, message:"Successfully deleted" });
  })
})


export{
  todoController
}


