import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent {

  formData: any = {};

  // VolunteeringOption: string[] = ['BMW', 'Audi'];

  VolunteeringOption = [
    { id: 0, name: "Perfect" },
    { id: 1, name: "Low" },
    { id: 2, name: "Minor" },
    { id: 3, name: "High" },
  ];
  // selectedVolunteeringOption: string = '';
  // selectsomeOneBenefitToWorkWith: string ='';
  // selectgroupYouNotBoredof: string = '';

  // selectvolunteeringTime: string='';
  // selectgeographicalAdvantageInVolunteerWork: string = '';
  // selecthaveCarForVolunteering: string ='';
  // selectknowAboutUs: string='';

  constructor(private http: HttpClient) {}

  submitForm(): void {
    // this.formData = {
    //   name: this.formData.name,
    //   email: this.formData.email,
    //   phoneNumber: this.formData.phoneNumber,
    //   qualification: this.formData.qualification,
    //   currentJob: this.formData.currentJob,
    //   country: this.formData.country,
    //   city: this.formData.city,
    //   postalCode: this.formData.postalCode,
    //   someOneBenefitToWorkWith: this.selectsomeOneBenefitToWorkWith,
    //   groupYouNotBoredof: this.selectgroupYouNotBoredof,
    //   volunteeringTime: this.selectvolunteeringTime,
    //   geographicalAdvantageInVolunteerWork: this.selectgeographicalAdvantageInVolunteerWork,
    //   haveCarForVolunteering: this.selecthaveCarForVolunteering,
    //   knowAboutUs: this.selectknowAboutUs,
    //   preson1: this.formData.preson1,
    //   preson2: this.formData.preson2
    // };

    // Send form data to API
    this.http.post('https://localhost:7125/api/ConstructionFound/createConstructionOfEnrollment', this.formData)
      .subscribe(response => {
        console.log('Form submitted successfully:', response);
        alert("Send successfully");
        // Optionally, reset the form after successful submission
        this.resetForm();
      }, error => {
        console.error('Error submitting form:', error);
      });
  }

  resetForm(): void {
    // Clear form data
    this.formData = {};
    // this.selectsomeOneBenefitToWorkWith = '';
    // this.selectgroupYouNotBoredof = '';
    // this.selectvolunteeringTime = '';
    // this.selectgeographicalAdvantageInVolunteerWork = '';
    // this.selecthaveCarForVolunteering = '';
    // this.selectknowAboutUs = '';
  }

}
