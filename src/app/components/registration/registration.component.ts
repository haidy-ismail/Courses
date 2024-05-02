import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  signUpForm!: FormGroup
  constructor(private fb: FormBuilder, private auth: AuthService){}
  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      fullName: ['', Validators.required],
      username:['', Validators.required],
      email:['', Validators.required],
      password: ['', Validators.required],
      phone: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      // type : ['', Validators.required]
    })
  }

  signUp(){
    if(this.signUpForm.valid){
      // console.log(this.signUpForm.value)
      this.auth.signUp(this.signUpForm.value)
      .subscribe({
        next:(res)=>{
          alert(res.message)
          this.signUpForm.reset();
        },
        error:(err)=>{
          alert(err?.error.message)
        }
      })
    }else{
      console.log('Form not valid');
    }
  }

  // signUp(){
  //   if(this.signUpForm.valid){
  //     this.auth.signUp(this.signUpForm.value)
  //   .subscribe({
  //     next:(res=>{
  //       alert(res.message)
  //     }),

  //     error:(err=>{
  //       alert(err.error.message)
  //     })
  //   })

  //     console.log(this.signUpForm.value)
  //   }else{
  //     console.log("error"); 
  //   }
  // }
}

  



