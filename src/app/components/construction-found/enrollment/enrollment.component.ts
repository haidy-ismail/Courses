import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { EnrollAlbnaaService } from 'src/app/services/enroll-albnaa.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css'],
})
export class EnrollmentComponent implements OnInit {
  myEnrollForm!: FormGroup;

  ngOnInit(): void {
    this.myEnrollForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      qualification: ['', Validators.required],
      currentJob: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
      volunteeringWorkHaveInterestIn: ['', Validators.required],
      someOneBenefitToWorkWith: ['', Validators.required],
      groupYouNotBoredof: ['', Validators.required],
      volunteeringTime: ['', Validators.required],
      geographicalAdvantageInVolunteerWork: ['', Validators.required],
      haveCarForVolunteering: ['', Validators.required],
      knowAboutUs: ['', Validators.required],
      presonF: ['', Validators.required],
      presonS: ['', Validators.required],
    });
  }

  constructor( private fb: FormBuilder , private enrollmentService :EnrollAlbnaaService){}


  onSubmitEnroll() {
    if (this.myEnrollForm.valid) {
      const enrollItem = this.myEnrollForm.value;
      this.enrollmentService.postEnrollElbnaa(enrollItem).subscribe(
          () => {
            alert('تم التسجيل')
              console.log('enrollment item added successfully');
              console.log(this.myEnrollForm.value)
              this.myEnrollForm.reset();
              // Optionally, refresh the news list or navigate back to the list
          },
          error => {
              console.error('Error adding new TainingApplicant Item :', error);
              console.log(this.myEnrollForm.value)
          }
      );
  } else {
      console.error('Form is invalid');
  }
}


  
}
