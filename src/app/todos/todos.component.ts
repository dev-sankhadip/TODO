import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { TodoService } from '../service/todo.service';
import { Router } from  '@angular/router'


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor( private service:TodoService, private router:Router) { }
  public todos=[];
  public isEditable=false;

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
    this.router.navigate(['edit',id]);
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
