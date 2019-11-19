import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor( private http:HttpClient ) { }

  addTodo(todo)
  {
    return this.http.post('http://localhost:2200/todo/add',todo);
  }

  getTodos()
  {
    return this.http.get(`http://localhost:2200/todo/alltodo`);
  }

  deleteTodo(id)
  {
    return this.http.delete(`http://localhost:2200/todo/delete/${id}`);
  }

  getTodo(id)
  {
    return this.http.get(`http://localhost:2200/todo/single/${id}`)
  }

  updateTodo(id, todo)
  {
    return this.http.put('http://localhost:2200/todo/update',{id,todo});
  }

}
