import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { ConstructionFoundComponent } from './components/construction-found/construction-found.component';
import { EnrollmentComponent } from './components/construction-found/enrollment/enrollment.component';
import { NewsComponent } from './components/news/news.component';
import { MagazineComponent } from './components/magazine/magazine.component';
import { MainComponent } from './components/main/main.component';
import { ResultComponent } from './components/InterConstructionCentre/internProgram/result/result.component';
import { LongTermComponent } from './components/InterConstructionCentre/internProgram/long-term/long-term.component';
import { JournalistComponent } from './components/InterConstructionCentre/internProgram/long-term/journalist/journalist.component';
import { TourismComponent } from './components/InterConstructionCentre/internProgram/long-term/tourism/tourism.component';
import { MapsComponent } from './components/InterConstructionCentre/internProgram/long-term/maps/maps.component';
import { ComputersComponent } from './components/InterConstructionCentre/internProgram/long-term/computers/computers.component';
import { LanguagesComponent } from './components/InterConstructionCentre/internProgram/long-term/languages/languages.component';
import { MangmentComponent } from './components/InterConstructionCentre/internProgram/long-term/mangment/mangment.component';
import { NursingComponent } from './components/InterConstructionCentre/internProgram/long-term/nursing/nursing.component';
import { BuildingInstituteComponent } from './components/building-institute/building-institute.component';
import { VisionComponent } from './components/building-institute/vision/vision.component';
import { AdditionsComponent } from './components/building-institute/additions/additions.component';
import { ApplyComponent } from './components/InterConstructionCentre/internProgram/apply/apply.component';
import { TraineesAffairsComponent } from './components/InterConstructionCentre/internProgram/trainees-affairs/trainees-affairs.component';
import { EnrollComponent } from './components/InterConstructionCentre/Courses/enroll/enroll.component';
import { EnquiryComponent } from './components/InterConstructionCentre/Courses/enquiry/enquiry.component';
import { ProblemInternComponent } from './components/InterConstructionCentre/internProgram/problem-intern/problem-intern.component';
import { ApplyMemComponent } from './components/membership/apply-mem/apply-mem.component';
import { GuidMemComponent } from './components/membership/guid-mem/guid-mem.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { TokenInterceptor } from './interceptors/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    JobsComponent,
    RegistrationComponent,
    ConstructionFoundComponent,
    EnrollmentComponent,
    NewsComponent,
    MagazineComponent,
    MainComponent,
    ResultComponent,
    LongTermComponent,
    JournalistComponent,
    TourismComponent,
    MapsComponent,
    ComputersComponent,
    LanguagesComponent,
    MangmentComponent,
    NursingComponent,
    
    RegistrationComponent,
    LogInComponent,
    BuildingInstituteComponent,
    VisionComponent,
    AdditionsComponent,
    ApplyComponent,
    TraineesAffairsComponent,
    EnrollComponent,
    EnquiryComponent,
    ProblemInternComponent,
    ApplyMemComponent,
    GuidMemComponent,
    DashBoardComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
