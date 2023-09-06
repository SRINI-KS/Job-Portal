import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobSeekersRoutingModule } from './job-seekers-routing.module';
import { JobSeekersComponent } from './job-seekers.component';


@NgModule({
  declarations: [
    JobSeekersComponent
  ],
  imports: [
    CommonModule,
    JobSeekersRoutingModule
  ]
})
export class JobSeekersModule { }
