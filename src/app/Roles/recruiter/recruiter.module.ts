import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruiterRoutingModule } from './recruiter-routing.module';
import { RecruiterComponent } from './recruiter.component';
import { PostJobComponent } from './Components/post-job/post-job.component';
import { JobDetailsComponent } from './Components/job-details/job-details.component';


@NgModule({
  declarations: [
    RecruiterComponent,
    PostJobComponent,
    JobDetailsComponent
  ],
  imports: [
    CommonModule,
    RecruiterRoutingModule
  ]
})
export class RecruiterModule { }
