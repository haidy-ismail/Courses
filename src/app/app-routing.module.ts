import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ConstructionFoundComponent } from './components/construction-found/construction-found.component';
import { EnrollmentComponent } from './components/construction-found/enrollment/enrollment.component';
import { HeaderComponent } from './shared/header/header.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { BuildingInstituteComponent } from './components/building-institute/building-institute.component';
import { VisionComponent } from './components/building-institute/vision/vision.component';
import { AdditionsComponent } from './components/building-institute/additions/additions.component';

const routes: Routes = [
  {path:'contact',component:ContactComponent},
  {path:'jobs',component:JobsComponent},
  {path:'registration',component:RegistrationComponent},
  {path: 'logIn' , component: LogInComponent},
  {path:'ConstFoundation',component:ConstructionFoundComponent},
  {path:'enroll',component:EnrollmentComponent},
  {path:'header',component:HeaderComponent},
  {path:'building-institute', component: BuildingInstituteComponent},
  {path: 'vision', component: VisionComponent},
  {path: 'additions', component: AdditionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
