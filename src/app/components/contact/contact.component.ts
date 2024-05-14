import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  formData: any = {}; // Object to hold form data

  constructor(private http: HttpClient) {}

  submitForm(): void {
    // Send form data to API
    this.http.post('https://localhost:7125/api/TechSupport/CreateTechSupport', this.formData)
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
