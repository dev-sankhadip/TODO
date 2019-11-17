import express from 'express'
const todoController=express.Router();


todoController.post('/add', function(request, response)
{
  console.log(request.body);
})

export{
  todoController
}


