import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Components/Auth/register/register.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { AuthGuard } from './Guards/auth.guard';
import { JobListComponent } from './Components/job-list/job-list.component';
import { JobDetailpageComponent } from './Components/job-detailpage/job-detailpage.component';
import { JobApplyComponent } from './Components/job-apply/job-apply.component';

const routes: Routes = [
  { path: 'Recruiter', loadChildren: () => import('./Roles/recruiter/recruiter.module').then(m => m.RecruiterModule) ,
canActivate:[AuthGuard]},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'jobDetails/:id',component:JobDetailpageComponent},
  {path:'jobApply',component:JobApplyComponent},

  {path:'',component:JobListComponent},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
