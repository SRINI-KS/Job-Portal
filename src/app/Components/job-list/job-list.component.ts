import { Component, OnInit } from '@angular/core';
import { JoblistService } from './Service/joblist.service';
import { JobModel } from './JobModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobListData!: JobModel[];

  constructor(private jobService: JoblistService,private router:Router,) { }


  ngOnInit() {
    this.getJobList()
  }

  getJobList() {
    this.jobService.getJobList().subscribe(
      (Response: any) => {
        this.jobListData = Response
        console.log(this.jobListData[0])

      }
    )
  }

openDetails(data:any){
this.router.navigate(['/jobDetails',data])
  
}
}
