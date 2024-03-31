import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { JobsComponent } from './components/jobs/jobs.component';

const routes: Routes = [
  {path:'contact',component:ContactComponent},
  {path:'jobs',component:JobsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
