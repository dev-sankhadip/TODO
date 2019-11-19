import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { TodoService } from '../service/todo.service';
import { FormControl } from '@angular/forms'


@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {

  constructor( private route:ActivatedRoute, private service:TodoService, private router:Router ) { }
  id:number
  todo:string

  editTodoInput=new FormControl('');

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.service.getTodo(this.id)
    .subscribe((res)=>{
      const result=res['result'];
      this.todo=result[0].todos;
    },(err)=>{
      console.log(err);
    })
  }
  update()
  {
    this.service.updateTodo(this.id, this.todo)
    .subscribe((res)=>{
      console.log(res);
      this.router.navigate(['todos']);
    },(err)=>{
      console.log(err);
    })
  }

}
