import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerForm!:FormGroup;
constructor( private formBuilder: FormBuilder,private auth:AuthService){}

  ngOnInit() {

    this.registerForm=this.formBuilder.group({
      fullName:['',Validators.required],
      companyName:['',Validators.required],
      emailId:['',Validators.required],
      password:['',Validators.required],
    })
  }

  register(){
    if(this.registerForm.valid){
this.auth.register(this.registerForm.value).subscribe(
  (Response)=>{
    console.log(Response)
  },
  (HttpErrorResponse)=>{
    console.log(HttpErrorResponse.message)
  }
)
    }

  }
}
