import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
constructor(private formBuilder: FormBuilder,private auth:AuthService,private router:Router){}
  loginForm!:FormGroup
  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      emailId:['',Validators.required],
      password:['',Validators.required]
    })
  }
login(){
  this.auth.login(this.loginForm.value).subscribe(
    (Response:any)=>{
      console.log(Response.emailId)
      this.auth.setEmail(Response.emailId)
      this.auth.setUserId(Response.id)
      this.router.navigate(['/Recruiter'])

    },

  )
}
  

}
