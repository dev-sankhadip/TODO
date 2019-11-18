import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TodosComponent } from './todos/todos.component';
import { ErrorComponent } from './error/error.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';


const routes: Routes = [
  { path:'', component:LoginComponent },
  { path:'login', component:LoginComponent },
  { path:'signup', component:SignupComponent },
  { path:'todos', component:TodosComponent },
  { path:'edit/:id', component:EditTodoComponent },
  { path:'**', component:ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
