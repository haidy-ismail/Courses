import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Directive, ElementRef, OnInit, Pipe } from '@angular/core';
import { FormBuilder, FormGroup, NgControl, Validators } from '@angular/forms';
import { JobApplicantService } from 'src/app/services/job-applicant.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-apply-job',
  templateUrl: './apply-job.component.html',
  styleUrls: ['./apply-job.component.css'],
})

export class ApplyJobComponent implements OnInit {

  myJobApplicantForm!:FormGroup;

  ngOnInit(): void {
    this.myJobApplicantForm = this.fb.group({
      name:['', Validators.required],
      dateOfBirth:['', Validators.required],
      address:['',Validators.required],
      phoneNumber:['', Validators.required],
      graduationYear:['', Validators.required],
      gender:['',Validators.required],
      university:['',Validators.required],
      faculty:['',Validators.required],
      applicantCv:['',Validators.required],
      
    });
  }

  constructor( private fb: FormBuilder , private JobApplicantService :JobApplicantService){}

  onSubmitJobApplicant() {
    if (this.myJobApplicantForm.valid) {
      const JobApplicantItem = this.myJobApplicantForm.value;
      this.JobApplicantService.postJobApplicant(JobApplicantItem).subscribe(
          () => {
            alert('تم التسجيل')
              console.log('Job Applicant item added successfully');
              this.myJobApplicantForm.reset();
              // Optionally, refresh the news list or navigate back to the list
          },
          error => {
              console.error('Error adding new JobApplicant Item :', error);
              console.log(this.myJobApplicantForm.value)
          }
      );
  } else {
      console.error('Form is invalid');
  }
}

}
