import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostJobService } from './Service/post-job.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/Components/Auth/Services/auth.service';
@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {


  postForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,private postJobService:PostJobService,private auth:AuthService) { }

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      userId:['',Validators.required],
      jobTitle: ["", Validators.required],
      jobDescription: ["", Validators.required],
      jobCategory: ["", Validators.required],
      jobType: ["", Validators.required],
      jobPostDate: ["", Validators.required],
      salaryType: ["", Validators.required],
      minSalary: ["", Validators.required],
      maxSalary: ["", Validators.required],
      skills: ["", Validators.required],
      qualifications: ["", Validators.required],
      experience: ["", Validators.required],
      companyName: ["", Validators.required],
      companyContactPerson: ["", Validators.required],
      contactEmail: ["", Validators.required,],
      contactNumber: ["", Validators.required],
      companyAddress: ["", Validators.required],
      country: ["", Validators.required],
      state: ["", Validators.required],
      pincode: ["", Validators.required,],
    })
  }


  postJob() {
    this.postForm.patchValue({jobPostDate:new Date()})
    const userId=this.auth.getUserId()
    this.postForm.patchValue({userId:userId})
    console.log(this.postForm.value)


    if(this.postForm.valid){
this.postJobService.postJobRequest(this.postForm.value).subscribe(
  (Response)=>{
    console.log(Response)
  },
  (HttpErrorResponse)=>{
    console.log(HttpErrorResponse)
  }
)

    }

  }
}
