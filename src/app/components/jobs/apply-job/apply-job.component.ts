import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Directive, ElementRef, Pipe } from '@angular/core';
import { NgControl } from '@angular/forms';
import { environment } from 'src/environments/environment.development';


@Component({
  selector: 'app-apply-job',
  templateUrl: './apply-job.component.html',
  styleUrls: ['./apply-job.component.css'],
})



export class ApplyJobComponent {
private apiUrl:string = environment.apiUrl
  formData: any = {}; // Object to hold form data



  constructor(private http: HttpClient ) {}

  submitForm(): void {
    
    // Send form data to API
    this.http.post(`${this.apiUrl}JobApplicant/AddjobApplicant`, this.formData)
      .subscribe(response => {
        console.log('Form submitted successfully:', response);
        alert("Send successfully")
        // Optionally, reset the form after successful submission
        this.resetForm();
      }, error => {
        console.error('Error submitting form:', error);
      });
  }

  resetForm(): void {
    // Clear form data
    this.formData = {};
  }
}
