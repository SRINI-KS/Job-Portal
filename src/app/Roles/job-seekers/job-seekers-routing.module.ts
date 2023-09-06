import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobSeekersComponent } from './job-seekers.component';

const routes: Routes = [{ path: '', component: JobSeekersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobSeekersRoutingModule { }
