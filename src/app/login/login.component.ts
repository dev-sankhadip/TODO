import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

import { passwordValidator } from '../validators/passwordValidator'
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private service:UserService ) { }

  loginForm=new FormGroup({
    email:new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('', [Validators.required, passwordValidator])
  })

  submit()
  {
    this.service.login(this.loginForm.value);
    this.loginForm.reset();
  }

  get password()
  {
    return this.loginForm.get('password');
  }

  ngOnInit() {
  }

}
