import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TodosComponent } from './todos/todos.component';
import { ErrorComponent } from './error/error.component';
import { HttpinterceptorService } from './service/http/httpinterceptor.service';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { TestComponent } from './test/test.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TodosComponent,
    ErrorComponent,
    EditTodoComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    { provide:HTTP_INTERCEPTORS, useClass:HttpinterceptorService, multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
