import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'

import { UserService } from '../service/user.service';
import { passwordValidator } from '../validators/passwordValidator';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service:UserService, private router:Router) { }

  signupForm=new FormGroup({
    email:new FormControl('',[Validators.required, Validators.email]),
    password:new FormControl('',[Validators.required, passwordValidator])
  })

  submit()
  {
    this.service.signup(this.signupForm.value)
    .subscribe((res)=>
    {
      console.log(res);
      this.router.navigate(['login']);
    },(err)=>
    {
      console.log(err);
    })
  }
  get password()
  {
    return this.signupForm.get('password');
  }
  ngOnInit() {
  }

}
