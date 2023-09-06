import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Components/Auth/register/register.component';

const routes: Routes = [
  { path: 'Job-Seekers', loadChildren: () => import('./Roles/job-seekers/job-seekers.module').then(m => m.JobSeekersModule) },
  { path: 'Recruiter', loadChildren: () => import('./Roles/recruiter/recruiter.module').then(m => m.RecruiterModule) },
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
