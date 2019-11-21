import { Component, OnInit, AfterViewInit, ViewChild, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { TodoService } from '../service/todo.service';
import { Router } from  '@angular/router'
import { TestComponent } from '../test/test.component';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements AfterViewInit {

  @ViewChild(TestComponent,{static:false}) testChild;

  constructor( private service:TodoService, private router:Router) { }
  public todos=[];
  public isEditable=false;
  public testMessage:string="sankhadip";
  public testMessage1:string="another message";

  public childMessageToParent:string;

  todoForm=new FormGroup({
    todo:new FormControl('',[Validators.required])
  })
  
  recieveMessage($event)
  {
    console.log($event);
  }
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
  ngAfterViewInit() {
    this.refreshTodo();
    this.childMessageToParent=this.testChild.messageToParent;
  }
  ngOnChanges(changes){
    console.log(changes);
  }
}
