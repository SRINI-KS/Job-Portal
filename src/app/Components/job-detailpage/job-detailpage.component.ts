import { Component, Input, OnInit } from '@angular/core';
import { JobModel } from '../job-list/JobModel';
import { ActivatedRoute, Router } from '@angular/router';
import { JoblistService } from '../job-list/Service/joblist.service';

@Component({
  selector: 'app-job-detailpage',
  templateUrl: './job-detailpage.component.html',
  styleUrls: ['./job-detailpage.component.css']
})
export class JobDetailpageComponent implements OnInit {
  jobData!: JobModel;
  jobId!:number;

  constructor(private jobService:JoblistService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    // this.jobData = this.shareData.getJobData()
    this.jobId=Number(this.route.snapshot.paramMap.get('id'))
    this.getData();
  }

  getData(){
    this.jobService.getJobListById(this.jobId).subscribe(
      (Response:any)=>{
        this.jobData=Response
        console.log(Response)
      }
    )
  }
  jobApply(){
    this.router.navigate(['/jobApply'])
  }

}
