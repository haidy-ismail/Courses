import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class JobApplicantService {

  private apiUrl:string = environment.apiUrl


  constructor(private http:HttpClient) { }

  getAllJobApplicant(){
    return this.http.get(`${this.apiUrl}JobApplicant/getAllApplicants`)
  }
}
