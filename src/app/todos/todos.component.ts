import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { TodoService } from '../service/todo.service';



@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor( private service:TodoService) { }
  public todos=[];
  todoForm=new FormGroup({
    todo:new FormControl('',[Validators.required])
  })

  upload(){
    this.service.addTodo(this.todoForm.value)
    .subscribe((res)=>{
      var todoDetails={
        id:res['id'],
        todos:res['todo']
      }
      this.todos.push(todoDetails);
      this.todoForm.reset();
    },(err)=>{
      console.log(err);
    })
  }

  delete(id){
    this.service.deleteTodo(id)
    .subscribe((res)=>{
      console.log(res);
      this.todos=this.todos.filter((todo)=>{ return todo.id!==id })
    },(err)=>{
      console.log(err);
    })
  }
  edit(id){
    console.log(id);
  }

  refreshTodo(){
    this.service.getTodos()
    .subscribe((res)=>{
      Object.assign(this.todos, res['result']);
    },(err)=>{
      console.log(err);
    })
  }
  ngOnInit() {
    this.refreshTodo();
  }

}
