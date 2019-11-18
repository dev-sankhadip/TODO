import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'

import { passwordValidator } from '../validators/passwordValidator'
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})




export class LoginComponent implements OnInit {

  constructor( private service:UserService, private router:Router ) { }

  loginForm=new FormGroup({
    email:new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('', [Validators.required])
  })

  submit()
  {
    this.service.login(this.loginForm.value)
    .subscribe((res)=>
    {
      const token=res['token'];
      const id=res['id'];
      window.localStorage.setItem("token",token);
      window.localStorage.setItem("id",id);
      this.router.navigate(['todos'])
    },(err)=>
    {
      console.log(err);
    })
  }

  get password()
  {
    return this.loginForm.get('password');
  }

  ngOnInit() {
  }

}
