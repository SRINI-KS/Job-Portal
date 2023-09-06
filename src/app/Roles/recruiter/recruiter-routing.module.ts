import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecruiterComponent } from './recruiter.component';
import { PostJobComponent } from './Components/post-job/post-job.component';

const routes: Routes = [{ path: '', component: PostJobComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruiterRoutingModule { }
