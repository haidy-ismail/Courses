import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ConstructionFoundComponent } from './components/construction-found/construction-found.component';
import { EnrollmentComponent } from './components/construction-found/enrollment/enrollment.component';
import { HeaderComponent } from './shared/header/header.component';
import { NewsComponent } from './components/news/news.component';
import { MagazineComponent } from './components/magazine/magazine.component';
import { MainComponent } from './components/main/main.component';
import { LongTermComponent } from './components/InterConstructionCentre/internProgram/long-term/long-term.component';
import { JournalistComponent } from './components/InterConstructionCentre/internProgram/long-term/journalist/journalist.component';
import { TourismComponent } from './components/InterConstructionCentre/internProgram/long-term/tourism/tourism.component';
import { MapsComponent } from './components/InterConstructionCentre/internProgram/long-term/maps/maps.component';
import { ComputersComponent } from './components/InterConstructionCentre/internProgram/long-term/computers/computers.component';
import { LanguagesComponent } from './components/InterConstructionCentre/internProgram/long-term/languages/languages.component';
import { MangmentComponent } from './components/InterConstructionCentre/internProgram/long-term/mangment/mangment.component';
import { NursingComponent } from './components/InterConstructionCentre/internProgram/long-term/nursing/nursing.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { BuildingInstituteComponent } from './components/building-institute/building-institute.component';
import { VisionComponent } from './components/building-institute/vision/vision.component';
import { AdditionsComponent } from './components/building-institute/additions/additions.component';

const routes: Routes = [
  {path:'home',component:MainComponent},
  {path:'contact',component:ContactComponent},
  {path:'jobs',component:JobsComponent},
  {path:'registration',component:RegistrationComponent},
  {path: 'login' , component:LogInComponent},
  {path:'ConstFoundation',component:ConstructionFoundComponent},
  {path:'enroll',component:EnrollmentComponent},
  {path:'header',component:HeaderComponent},
  {path:'news',component:NewsComponent},
  {path:'magazine',component:MagazineComponent},
  {path:'longTerm',component:LongTermComponent},
  {path:'journalist',component:JournalistComponent},
  {path:'toursim',component:TourismComponent},
  {path:'map',component:MapsComponent},
  {path:'computer',component:ComputersComponent},
  {path:'language',component:LanguagesComponent},
  {path:'manage',component:MangmentComponent},
  {path:'nursing',component:NursingComponent},
  {path:'**',component:MainComponent},
  {path:'building-institute', component: BuildingInstituteComponent},
  {path: 'vision', component: VisionComponent},
  {path: 'additions', component: AdditionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
