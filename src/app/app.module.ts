import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
<<<<<<< HEAD
import { JobsComponent } from './components/jobs/jobs.component';
=======
import { RegistrationComponent } from './components/registration/registration.component';
>>>>>>> 86e5df1431b47c0344396eb2d680d078aa3510b0

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
<<<<<<< HEAD
    JobsComponent
=======
    RegistrationComponent
>>>>>>> 86e5df1431b47c0344396eb2d680d078aa3510b0
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
