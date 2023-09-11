import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruiterRoutingModule } from './recruiter-routing.module';
import { RecruiterComponent } from './recruiter.component';
import { PostJobComponent } from './Components/post-job/post-job.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RecruiterComponent,
    PostJobComponent,
  ],
  imports: [
    CommonModule,
    RecruiterRoutingModule,
    ReactiveFormsModule,
  ]
})
export class RecruiterModule { }
