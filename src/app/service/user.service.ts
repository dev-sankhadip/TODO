import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export interface Config {
  heroesUrl: string;
  textfile: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http:HttpClient ) { }

  login(user)
  {
    return this.http.post<Config>(`http://localhost:2200/users/login`, user);
  }
  signup(user)
  {
    console.log(user);
    return this.http.post(`http://localhost:2200/users/signup`, user);
  }
}
