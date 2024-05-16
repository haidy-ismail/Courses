import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent {

  private apiUrl: string = environment.apiUrl;
  formData: any = {};

  // VolunteeringOption: string[] = ['BMW', 'Audi'];

  VolunteeringOption = [
    { id: 0, name: "Perfect" },
    { id: 1, name: "Low" },
    { id: 2, name: "Minor" },
    { id: 3, name: "High" },
  ];

  conForm!: FormGroup;

  constructor(private http: HttpClient,
    private fb: FormBuilder,
    private construction: ApiServiceService,
    private formBuilder:FormBuilder,
    private toast: NgToastService,
  ) {

    
    this.conForm = this.formBuilder.group({
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
      person1: ['', Validators.required],
      person2: ['', Validators.required],
    })
    // this.http.post(environment.apiUrl +'ConstructionFound/createConstructionOfEnrollment', this.formData)
    //   .subscribe(response => {
    //     console.log('Form submitted successfully:', response);
    //     alert("Send successfully");
    //     // Optionally, reset the form after successful submission
    //     this.resetForm();
    //   }, error => {
    //     console.error('Error submitting form:', error);
    //   });
    // });
  }



  onSubmit(): void{
    
       // Send form data to API
       this.http.post(`${this.apiUrl}ConstructionFound/createConstructionOfEnrollment`, this.formData)
       .subscribe(response => {
         console.log('Form submitted successfully:', response);
         alert("Send successfully")
         // Optionally, reset the form after successful submission
        //  this.resetForm();
       }, error => {
         console.error('Error submitting form:', error);
       });
  //   if(this.conForm.valid){
  //     console.log(this.conForm.value)
  //     this.construction.addConstructionFound(this.conForm.value)
  //       .subscribe(
  //         (response) => {
  //           console.log(response);
  //           console.log('Construction found request added successfully:', response);
  //           this.toast.success({detail:"SUCCESS",summary: response.message, duration: 5000});

  //           // Optionally, reset the form after successful submission
  //           // this.conForm.reset();
  //   },
  //   (error) => {
  //     this.toast.error({detail:"ERROR",summary: "Something went wrong", duration: 5000});

  //     console.error('Error adding construction found request:', error);
  //     // Handle error, e.g., show an error message to the user
  //   }
  // );
} 
  }
  
    


  


