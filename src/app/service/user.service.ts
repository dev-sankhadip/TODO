import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http:HttpClient ) { }

  login(user)
  {
    console.log(user);
    this.http.post(`http://localhost:2200/users/login`, user)
    .subscribe((data)=>
    {
      console.log(data);
    },(error)=>
    {
      console.log(error);
    })
  }
}
